import os, json, random
from datetime import datetime
from functools import wraps
from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from authlib.integrations.flask_client import OAuth
from dotenv import load_dotenv

import company_data
import questions_data
import cheatsheet_data

load_dotenv()
app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "change-this-development-secret-preppilot-2026")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///preppilot.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
oauth = OAuth(app)

if os.getenv("GOOGLE_CLIENT_ID") and os.getenv("GOOGLE_CLIENT_SECRET"):
    oauth.register(
        name="google",
        client_id=os.getenv("GOOGLE_CLIENT_ID"),
        client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"}
    )

# =========================================================================
# DATABASE MODELS
# =========================================================================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(255))
    google_id = db.Column(db.String(150), unique=True)
    role = db.Column(db.String(20), default="student")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False) # Aptitude, Reasoning, Verbal, Programming
    topic = db.Column(db.String(100), default="General")
    difficulty = db.Column(db.String(20), default="Medium") # Easy, Medium, Hard
    company = db.Column(db.String(80), default="All") # TCS, Infosys, Wipro, Cognizant, Accenture, Amazon, etc.
    question = db.Column(db.Text, nullable=False)
    option_a = db.Column(db.String(255), nullable=False)
    option_b = db.Column(db.String(255), nullable=False)
    option_c = db.Column(db.String(255), nullable=False)
    option_d = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(1), nullable=False)
    explanation = db.Column(db.Text, default="")

class Bookmark(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey("question.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    question = db.relationship("Question")
    __table_args__ = (db.UniqueConstraint("user_id", "question_id", name="unique_user_bookmark"),)

class StudyPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    title = db.Column(db.String(150), nullable=False)
    subject = db.Column(db.String(60), nullable=False)
    due_date = db.Column(db.Date, nullable=False)
    completed = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class DailyGoal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), unique=True, nullable=False)
    target_tests = db.Column(db.Integer, default=2)

class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    taken_at = db.Column(db.DateTime, default=datetime.utcnow)
    test_type = db.Column(db.String(50), default="category") # category, company, practice
    details = db.Column(db.Text, default="{}") # JSON of question-by-question answers
    user = db.relationship("User", backref="results")

# =========================================================================
# AUTH HELPERS & DECORATORS
# =========================================================================

def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if "user_id" not in session:
            flash("Please sign in to continue.", "warning")
            return redirect(url_for("login"))
        return fn(*args, **kwargs)
    return wrapper

def admin_required(fn):
    @wraps(fn)
    @login_required
    def wrapper(*args, **kwargs):
        user = db.session.get(User, session["user_id"])
        if not user or user.role != "admin":
            flash("Administrator access is required.", "danger")
            return redirect(url_for("dashboard"))
        return fn(*args, **kwargs)
    return wrapper

def current_user():
    return db.session.get(User, session["user_id"]) if "user_id" in session else None

@app.context_processor
def inject_user():
    return {
        "current_user": current_user(),
        "all_companies": company_data.get_all_companies()
    }

# =========================================================================
# CORE USER & AUTH ROUTES
# =========================================================================

@app.route("/")
def index():
    if "user_id" in session:
        return redirect(url_for("dashboard"))
    featured_companies = company_data.get_all_companies()[:6]
    return render_template("index.html", featured_companies=featured_companies)

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")
        if not name or not email or len(password) < 6:
            flash("Enter your name, a valid email, and a password of at least 6 characters.", "danger")
        elif User.query.filter_by(email=email).first():
            flash("An account with this email already exists.", "warning")
        else:
            user = User(name=name, email=email, password_hash=generate_password_hash(password))
            db.session.add(user)
            db.session.commit()
            session["user_id"] = user.id
            flash("Your account is ready. Welcome to PrepPilot!", "success")
            return redirect(url_for("dashboard"))
    return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")
        user = User.query.filter_by(email=email).first()
        if user and user.password_hash and check_password_hash(user.password_hash, password):
            session["user_id"] = user.id
            flash("Signed in successfully.", "success")
            return redirect(url_for("dashboard"))
        flash("Incorrect email or password.", "danger")
    return render_template("login.html", google_enabled=bool(os.getenv("GOOGLE_CLIENT_ID") and os.getenv("GOOGLE_CLIENT_SECRET")))

@app.route("/auth/google")
def google_login():
    if "google" not in oauth._clients:
        flash("Google sign-in is not configured yet. Add your Google OAuth credentials to .env.", "warning")
        return redirect(url_for("login"))
    redirect_uri = url_for("google_callback", _external=True)
    return oauth.google.authorize_redirect(redirect_uri)

@app.route("/auth/google/callback")
def google_callback():
    token = oauth.google.authorize_access_token()
    info = token.get("userinfo")
    if not info:
        info = oauth.google.userinfo()
    email = info.get("email", "").lower()
    google_id = info.get("sub")
    if not email or not info.get("email_verified"):
        flash("Google did not provide a verified email address.", "danger")
        return redirect(url_for("login"))
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(name=info.get("name") or email.split("@")[0], email=email, google_id=google_id)
        db.session.add(user)
    else:
        user.google_id = google_id
    db.session.commit()
    session["user_id"] = user.id
    flash("Signed in with Google.", "success")
    return redirect(url_for("dashboard"))

@app.route("/logout")
def logout():
    session.clear()
    flash("You have been signed out.", "info")
    return redirect(url_for("index"))

# =========================================================================
# DASHBOARD & PERFORMANCE ANALYTICS
# =========================================================================

@app.route("/dashboard")
@login_required
def dashboard():
    user = current_user()
    recent = Result.query.filter_by(user_id=user.id).order_by(Result.taken_at.desc()).limit(5).all()
    total_tests = Result.query.filter_by(user_id=user.id).count()
    avg = db.session.query(db.func.avg(Result.score * 100.0 / Result.total)).filter_by(user_id=user.id).scalar()
    categories = ["Aptitude", "Reasoning", "Verbal", "Programming"]
    today = datetime.utcnow().date()
    today_tests = Result.query.filter(Result.user_id == user.id, db.func.date(Result.taken_at) == today).count()
    goal = DailyGoal.query.filter_by(user_id=user.id).first()
    goal_target = goal.target_tests if goal else 2
    
    category_stats = []
    lowest_cat = None
    min_avg = 101
    for category in categories:
        attempts = Result.query.filter_by(user_id=user.id, category=category).all()
        cat_avg = round(sum((r.score / r.total) * 100 for r in attempts) / len(attempts)) if attempts else 0
        category_stats.append({"name": category, "average": cat_avg, "attempts": len(attempts)})
        if attempts and cat_avg < min_avg:
            min_avg = cat_avg
            lowest_cat = category

    top_companies = company_data.get_all_companies()[:4]
    total_questions = Question.query.count()
    bookmarked_count = Bookmark.query.filter_by(user_id=user.id).count()

    return render_template(
        "dashboard.html",
        recent=recent,
        total_tests=total_tests,
        avg=round(avg or 0),
        categories=categories,
        today_tests=today_tests,
        goal_target=goal_target,
        category_stats=category_stats,
        top_companies=top_companies,
        lowest_cat=lowest_cat,
        total_questions=total_questions,
        bookmarked_count=bookmarked_count
    )

# =========================================================================
# COMPANY PREPARATION HUB
# =========================================================================

@app.route("/companies")
@login_required
def companies():
    all_comps = company_data.get_all_companies()
    return render_template("companies.html", companies=all_comps)

@app.route("/company/<cid>")
@login_required
def company_detail(cid):
    company = company_data.get_company_by_id(cid)
    if not company:
        flash("Company profile not found.", "warning")
        return redirect(url_for("companies"))
    
    # Get questions related to this company or category
    comp_questions = Question.query.filter(
        db.or_(Question.company.ilike(f"%{company['short_name']}%"), Question.company == "All")
    ).limit(10).all()
    
    return render_template("company_detail.html", company=company, sample_questions=comp_questions)

# =========================================================================
# TIMED QUIZZES (CATEGORY & COMPANY MOCK TESTS)
# =========================================================================

@app.route("/quiz/<category>")
@login_required
def quiz(category):
    allowed = ["Aptitude", "Reasoning", "Verbal", "Programming"]
    if category not in allowed:
        flash("Unknown practice category.", "danger")
        return redirect(url_for("dashboard"))
    
    questions = Question.query.filter_by(category=category).all()
    if not questions:
        flash("No questions are available in this category yet.", "warning")
        return redirect(url_for("dashboard"))
    
    sample_size = min(10, len(questions))
    selected_questions = random.sample(questions, sample_size)
    saved_ids = {b.question_id for b in Bookmark.query.filter_by(user_id=session["user_id"]).all()}
    
    return render_template(
        "quiz.html",
        category=category,
        test_type="category",
        title_prefix=f"{category} Practice Test",
        questions=selected_questions,
        saved_ids=saved_ids,
        duration=max(5, len(selected_questions) * 60)
    )

@app.route("/quiz/company/<cid>")
@login_required
def company_quiz(cid):
    company = company_data.get_company_by_id(cid)
    if not company:
        flash("Company mock test not found.", "danger")
        return redirect(url_for("companies"))
    
    # Pull questions tagged specifically for this company, plus core questions
    company_questions = Question.query.filter(
        Question.company.ilike(f"%{company['short_name']}%")
    ).all()
    
    all_questions = Question.query.all()
    # If fewer than 10 company-specific questions exist, supplement with general questions
    if len(company_questions) < 10:
        other_questions = [q for q in all_questions if q not in company_questions]
        needed = 10 - len(company_questions)
        combined = company_questions + random.sample(other_questions, min(needed, len(other_questions)))
    else:
        combined = random.sample(company_questions, 10)
    
    random.shuffle(combined)
    saved_ids = {b.question_id for b in Bookmark.query.filter_by(user_id=session["user_id"]).all()}
    
    return render_template(
        "quiz.html",
        category=company["short_name"],
        test_type="company",
        title_prefix=f"{company['name']} Mock Exam",
        questions=combined,
        saved_ids=saved_ids,
        duration=max(5, len(combined) * 60)
    )

@app.route("/submit-quiz", methods=["POST"])
@login_required
def submit_quiz():
    payload = request.get_json(silent=True) or {}
    category = payload.get("category", "General")
    test_type = payload.get("test_type", "category")
    answers = payload.get("answers", {}) # { "question_id": "A" }
    
    ids = [int(x) for x in answers.keys() if str(x).isdigit()]
    questions = Question.query.filter(Question.id.in_(ids)).all()
    
    if not questions:
        return jsonify({"error": "No valid questions evaluated"}), 400
    
    score = 0
    review_details = []
    for q in questions:
        user_ans = answers.get(str(q.id))
        is_correct = (user_ans == q.answer)
        if is_correct:
            score += 1
        review_details.append({
            "question_id": q.id,
            "user_answer": user_ans,
            "correct_answer": q.answer,
            "is_correct": is_correct
        })
    
    total = len(questions)
    result = Result(
        user_id=session["user_id"],
        category=category,
        score=score,
        total=total,
        test_type=test_type,
        details=json.dumps(review_details)
    )
    db.session.add(result)
    db.session.commit()
    
    return jsonify({
        "score": score,
        "total": total,
        "percentage": round(score * 100 / total),
        "result_id": result.id
    })

# =========================================================================
# QUESTION-BY-QUESTION SOLUTION REVIEW
# =========================================================================

@app.route("/quiz-review/<int:result_id>")
@login_required
def quiz_review(result_id):
    result = Result.query.filter_by(id=result_id, user_id=session["user_id"]).first_or_404()
    review_data = json.loads(result.details or "[]")
    
    question_ids = [item["question_id"] for item in review_data]
    questions_map = {q.id: q for q in Question.query.filter(Question.id.in_(question_ids)).all()}
    
    items = []
    for item in review_data:
        q = questions_map.get(item["question_id"])
        if q:
            items.append({
                "question": q,
                "user_answer": item.get("user_answer"),
                "correct_answer": item.get("correct_answer"),
                "is_correct": item.get("is_correct")
            })
            
    saved_ids = {b.question_id for b in Bookmark.query.filter_by(user_id=session["user_id"]).all()}
    
    return render_template("quiz_review.html", result=result, items=items, saved_ids=saved_ids)

# =========================================================================
# SELF-PACED PRACTICE MODE (INSTANT EXPLANATION)
# =========================================================================

@app.route("/practice")
@app.route("/practice/<category>")
@login_required
def practice_mode(category=None):
    query = Question.query
    if category and category.lower() != "all":
        query = query.filter_by(category=category.capitalize())
        active_cat = category.capitalize()
    else:
        active_cat = "All"
    
    # Topic and Company filter
    topic_filter = request.args.get("topic")
    company_filter = request.args.get("company")
    diff_filter = request.args.get("difficulty")
    
    if topic_filter:
        query = query.filter(Question.topic == topic_filter)
    if company_filter and company_filter != "All":
        query = query.filter(Question.company.ilike(f"%{company_filter}%"))
    if diff_filter and diff_filter != "All":
        query = query.filter_by(difficulty=diff_filter)
        
    questions = query.limit(20).all()
    categories = ["Aptitude", "Reasoning", "Verbal", "Programming"]
    saved_ids = {b.question_id for b in Bookmark.query.filter_by(user_id=session["user_id"]).all()}
    
    # Get distinct topics
    topics = [r[0] for r in db.session.query(Question.topic).distinct().all() if r[0]]
    
    return render_template(
        "practice.html",
        questions=questions,
        categories=categories,
        active_cat=active_cat,
        saved_ids=saved_ids,
        topics=topics,
        selected_topic=topic_filter,
        selected_company=company_filter,
        selected_diff=diff_filter
    )

# =========================================================================
# CHEATSHEETS & FORMULAS HUB
# =========================================================================

@app.route("/cheatsheets")
@login_required
def cheatsheets():
    active_tab = request.args.get("tab", "aptitude")
    sheets = cheatsheet_data.get_cheatsheets()
    current_sheet = sheets.get(active_tab, sheets["aptitude"])
    return render_template("cheatsheets.html", sheets=sheets, active_tab=active_tab, current_sheet=current_sheet)

# =========================================================================
# RESULTS, LEADERBOARD, STUDY TOOLS
# =========================================================================

@app.route("/results")
@login_required
def results():
    items = Result.query.filter_by(user_id=session["user_id"]).order_by(Result.taken_at.desc()).all()
    return render_template("results.html", results=items)

@app.route("/leaderboard")
@login_required
def leaderboard():
    rows = db.session.query(
        User.name,
        db.func.sum(Result.score).label("points"),
        db.func.sum(Result.total).label("total")
    ).join(Result).group_by(User.id).order_by(db.desc("points")).limit(15).all()
    return render_template("leaderboard.html", rows=rows)

@app.route("/tools", methods=["GET", "POST"])
@login_required
def tools_page():
    user_id = session["user_id"]
    if request.method == "POST":
        action = request.form.get("action")
        if action == "goal":
            try:
                target = max(1, min(20, int(request.form.get("target_tests", 2))))
                goal = DailyGoal.query.filter_by(user_id=user_id).first()
                if not goal:
                    goal = DailyGoal(user_id=user_id)
                    db.session.add(goal)
                goal.target_tests = target
                db.session.commit()
                flash("Daily goal updated successfully.", "success")
            except ValueError:
                flash("Enter a valid daily target.", "danger")
        elif action == "plan":
            title = request.form.get("title", "").strip()
            subject = request.form.get("subject", "Aptitude").strip()
            due_text = request.form.get("due_date", "")
            try:
                due_date = datetime.strptime(due_text, "%Y-%m-%d").date()
                if title:
                    db.session.add(StudyPlan(user_id=user_id, title=title, subject=subject, due_date=due_date))
                    db.session.commit()
                    flash("Study task added.", "success")
                else:
                    flash("Enter a task title.", "danger")
            except ValueError:
                flash("Choose a valid due date.", "danger")
        return redirect(url_for("tools_page"))

    bookmarks = Bookmark.query.filter_by(user_id=user_id).order_by(Bookmark.created_at.desc()).all()
    plans = StudyPlan.query.filter_by(user_id=user_id).order_by(StudyPlan.completed.asc(), StudyPlan.due_date.asc()).all()
    goal = DailyGoal.query.filter_by(user_id=user_id).first()
    return render_template("tools.html", bookmarks=bookmarks, plans=plans, goal=goal)

@app.route("/bookmark/<int:question_id>", methods=["POST"])
@login_required
def toggle_bookmark(question_id):
    question = db.session.get(Question, question_id)
    if not question:
        flash("Question not found.", "danger")
    else:
        saved = Bookmark.query.filter_by(user_id=session["user_id"], question_id=question_id).first()
        if saved:
            db.session.delete(saved)
            flash("Question removed from bookmarks.", "info")
        else:
            db.session.add(Bookmark(user_id=session["user_id"], question_id=question_id))
            flash("Question bookmarked for revision.", "success")
        db.session.commit()
    return redirect(request.referrer or url_for("dashboard"))

@app.route("/study-plan/<int:plan_id>/toggle", methods=["POST"])
@login_required
def toggle_plan(plan_id):
    task = StudyPlan.query.filter_by(id=plan_id, user_id=session["user_id"]).first_or_404()
    task.completed = not task.completed
    db.session.commit()
    return redirect(url_for("tools_page"))

@app.route("/study-plan/<int:plan_id>/delete", methods=["POST"])
@login_required
def delete_plan(plan_id):
    task = StudyPlan.query.filter_by(id=plan_id, user_id=session["user_id"]).first_or_404()
    db.session.delete(task)
    db.session.commit()
    flash("Study task deleted.", "info")
    return redirect(url_for("tools_page"))

# =========================================================================
# ADMIN MANAGEMENT
# =========================================================================

@app.route("/admin")
@admin_required
def admin():
    cat_filter = request.args.get("category", "All")
    comp_filter = request.args.get("company", "All")
    search_query = request.args.get("q", "").strip()

    query = Question.query
    if cat_filter != "All":
        query = query.filter_by(category=cat_filter)
    if comp_filter != "All":
        query = query.filter(Question.company.ilike(f"%{comp_filter}%"))
    if search_query:
        query = query.filter(Question.question.ilike(f"%{search_query}%"))

    questions = query.order_by(Question.id.desc()).all()
    users = User.query.count()
    results_count = Result.query.count()
    
    category_counts = {
        cat: Question.query.filter_by(category=cat).count()
        for cat in ["Aptitude", "Reasoning", "Verbal", "Programming"]
    }

    return render_template(
        "admin.html",
        questions=questions,
        users=users,
        results=results_count,
        category_counts=category_counts,
        cat_filter=cat_filter,
        comp_filter=comp_filter,
        search_query=search_query
    )

@app.route("/admin/add-question", methods=["POST"])
@admin_required
def add_question():
    q = Question(
        category=request.form["category"],
        topic=request.form.get("topic", "General"),
        difficulty=request.form.get("difficulty", "Medium"),
        company=request.form.get("company", "All"),
        question=request.form["question"].strip(),
        option_a=request.form["a"].strip(),
        option_b=request.form["b"].strip(),
        option_c=request.form["c"].strip(),
        option_d=request.form["d"].strip(),
        answer=request.form["answer"].strip().upper(),
        explanation=request.form.get("explanation", "").strip()
    )
    db.session.add(q)
    db.session.commit()
    flash("Question added to question bank successfully.", "success")
    return redirect(url_for("admin"))

@app.route("/admin/delete-question/<int:qid>", methods=["POST"])
@admin_required
def delete_question(qid):
    q = db.session.get(Question, qid)
    if q:
        db.session.delete(q)
        db.session.commit()
        flash("Question deleted.", "info")
    return redirect(url_for("admin"))

# =========================================================================
# INITIALIZATION & SEEDING
# =========================================================================

def seed_data():
    existing_count = Question.query.count()
    all_q_data = questions_data.get_all_questions()
    
    if existing_count < len(all_q_data):
        print(f"Seeding question bank: {len(all_q_data)} questions available...")
        # Add questions that are not already in DB
        for item in all_q_data:
            exists = Question.query.filter_by(question=item["question"]).first()
            if not exists:
                db.session.add(Question(
                    category=item["category"],
                    topic=item.get("topic", "General"),
                    difficulty=item.get("difficulty", "Medium"),
                    company=item.get("company", "All"),
                    question=item["question"],
                    option_a=item["option_a"],
                    option_b=item["option_b"],
                    option_c=item["option_c"],
                    option_d=item["option_d"],
                    answer=item["answer"],
                    explanation=item.get("explanation", "")
                ))
        db.session.commit()
        print("Question bank seeded successfully.")

with app.app_context():
    db.create_all()
    seed_data()
    admin_email = os.getenv("ADMIN_EMAIL", "admin@preppilot.com")
    admin_password = os.getenv("ADMIN_PASSWORD", "admin123")
    if not User.query.filter_by(email=admin_email).first():
        db.session.add(User(
            name="PrepPilot Admin",
            email=admin_email,
            password_hash=generate_password_hash(admin_password),
            role="admin"
        ))
        db.session.commit()

if __name__ == "__main__":
    app.run(debug=True)
