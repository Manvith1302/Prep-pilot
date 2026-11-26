# PrepPilot – Campus Recruitment Exam Practice Platform (Enhanced Edition)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Manvith1302/Prep-pilot)

🌐 **1-Click Render Deploy URL**: [https://render.com/deploy?repo=https://github.com/Manvith1302/Prep-pilot](https://render.com/deploy?repo=https://github.com/Manvith1302/Prep-pilot)  
🌐 **GitHub Pages Demo**: [https://manvith1302.github.io/Prep-pilot/](https://manvith1302.github.io/Prep-pilot/)

PrepPilot is a comprehensive, production-ready campus placement and competitive examination preparation platform built with Python (Flask) and SQLite. It helps students master the recruitment tests of top global tech employers through targeted question banks, company-specific mock exams, instant feedback, and step-by-step mathematical & logical solution derivations.

---

## 🌟 Key Features

### 1. 🏢 Company Recruitment Hub & Exam Patterns
- In-depth profiles for **10 premier campus recruiters**:
  - **TCS** (National Qualifier Test – Ninja, Digital, Prime)
  - **Infosys** (Systems Engineer, DSE, Specialist Programmer)
  - **Accenture** (Associate Software Engineer & Advanced ASE)
  - **Wipro** (Elite NLTH & Turbo)
  - **Cognizant** (GenC, GenC Elevate, GenC Next)
  - **Amazon** (SDE-1 & Cloud Support)
  - **Capgemini** (Exceller & Tech Challenge)
  - **Deloitte** (Associate Analyst & Consulting)
  - **Zoho** (Software Developer)
  - **Microsoft** (Software Engineer Campus)
- **Detailed breakdown of question types**: Know exactly what percentage of Quantitative, Logical, Verbal, and Technical questions each company asks.
- **Round-by-Round Timeline**: Online assessment durations, negative marking rules, technical interview formats, and HR rounds.
- **1-Click Company Mock Exams**: Simulate realistic, timed exams customized for each recruiter.

### 2. 📚 Comprehensive 85+ Question Bank
- Fully populated database with rich, verified questions across 4 core competencies:
  - **Quantitative Aptitude**: Speed Distance Time, Time & Work (LCM method), Profit & Loss, Percentages, Simple & Compound Interest, Permutations & Combinations, Probability, Ratio & Proportion, Averages & Mixtures, Number Systems.
  - **Logical & Verbal Reasoning**: Syllogisms (Complementary pairs & deductions), Blood Relations (Family trees), Coding-Decoding, Seating Arrangements (Linear & Circular), Direction Sense, Statement & Assumption, Cause & Effect, Data Sufficiency.
  - **Verbal Ability & English**: Reading Comprehension, Spotting Errors, Sentence Completion, Para Jumbles, Synonyms & Antonyms, Idioms & Phrases, Active/Passive Voice, Direct/Indirect Speech.
  - **Programming & Technical**: Data Structures (BST, Hash Tables, Stacks, Queues, Arrays), Algorithms (Merge Sort, Quick Sort, Binary Search), Python/Java/C/C++ logic, DBMS & SQL (JOINs, HAVING, Normalization, ACID), Operating Systems (Deadlocks, Paging, Thrashing), Computer Networks (OSI layers, TCP/UDP).

### 3. 🔍 Post-Test Solution Review & Explanations
- After submitting any test, students can access a question-by-question review page (`/quiz-review/<result_id>`).
- Highlights user choices vs. correct answers with color-coded status badges.
- Displays comprehensive, step-by-step mathematical and logical derivations for every problem.
- 1-click question bookmarking to save tricky questions directly into the student's personal revision vault.

### 4. 🎯 Self-Paced Practice Mode
- Untimed practice mode (`/practice`) for deep conceptual learning without exam pressure.
- Interactive option selection and instant "Check Answer" validation.
- Filter questions dynamically by **Category**, **Company**, **Difficulty Level**, and **Specific Topic**.

### 5. 📑 Placement Cheatsheets & Formula Vault
- **Quantitative Aptitude**: Essential speed formulas, train relative velocity, alligation rules, interest differences, and combination shortcuts.
- **Reasoning Shortcuts**: The EJOTY alphabet trick, opposite letter pairs (Sum=27), syllogisms truth matrix, and direction angle rules.
- **Core CS Fundamentals**: Data structure time complexities reference, sorting algorithms stability/space table, OOP 4 pillars, and database normal forms.
- **HR & Placement Interview Guide**: The STAR technique (Situation, Task, Action, Result) blueprint, structured "Tell me about yourself" template, and top 10 frequently asked HR questions with model answers.

### 6. 📊 Analytics, Study Planner & Tools
- **Weakness Detection**: Automatically identifies the student's lowest-scoring category and surfaces personalized practice recommendations.
- **Category-wise Performance Bars**: Real-time accuracy tracking and attempt counts across competencies.
- **Daily Practice Habit Tracker**: Set and track daily test completion goals.
- **Personal Study Planner**: Add study tasks with due dates and completion checkoffs.
- **Global Leaderboard**: Live community rankings based on total points.

### 7. 🛡️ Administrator Control Center
- Search and filter questions by category, recruiter, or keyword.
- Add new questions with custom category, topic, company tag, difficulty level, and full step-by-step explanations.
- System statistics: registered students, total attempts, and category distribution.

---

## 🚀 Quick Start Guide (Windows)

### Prerequisites
- Python 3.10 or newer

### Installation & Run

1. Open PowerShell and navigate to the project directory:
   ```powershell
   cd "C:\Users\kothu\Downloads\Prep pilot"
   ```

2. (Optional but recommended) Create and activate a virtual environment:
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

3. Install requirements:
   ```powershell
   pip install -r requirements.txt
   ```

4. Start the application:
   ```powershell
   python app.py
   ```

5. Open your browser and visit:
   ```
   http://127.0.0.1:5000
   ```

---

## 🔑 Demo Accounts

| Role | Email | Password | Access |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@preppilot.com` | `admin123` | Full Admin Dashboard & Question Bank Manager |
| **Student** | Create your own via Sign Up | Custom | Student Dashboard, Quizzes, Solutions, Tools |

---

## 📁 Project Structure

```
Prep pilot/
├── app.py                   # Main Flask application & database models
├── company_data.py          # 10 Top Recruiters: exam patterns, rounds & question types
├── questions_data.py        # 85+ question bank with topics, difficulty & explanations
├── cheatsheet_data.py       # Aptitude formulas, reasoning tricks & HR interview guide
├── requirements.txt         # Python package dependencies
├── .env.example             # Example environment variables
├── README.md                # Project documentation
├── instance/
│   └── preppilot.db         # SQLite database (auto-created & seeded on first launch)
├── templates/
│   ├── base.html            # Main layout with enhanced navigation
│   ├── index.html           # Landing page with recruiter spotlight
│   ├── login.html           # Authentication sign-in
│   ├── register.html        # Student registration
│   ├── dashboard.html       # Analytics dashboard & company mock test launchers
│   ├── companies.html       # Company Recruitment Hub (all 10 companies)
│   ├── company_detail.html  # Company pattern, selection rounds & question types
│   ├── quiz.html            # Timed exam simulator (category & company modes)
│   ├── quiz_review.html     # Question-by-question solution review with explanations
│   ├── practice.html        # Self-paced untimed practice with instant reveal
│   ├── cheatsheets.html     # Formula vault, reasoning shortcuts & HR STAR guide
│   ├── results.html         # Test history with direct solution review links
│   ├── leaderboard.html     # Community ranking
│   ├── tools.html           # Daily goals, study planner & revision vault
│   └── admin.html           # Admin question bank manager with filters
└── static/
    ├── css/
    │   └── style.css        # Sleek, responsive design system (Space Grotesk & DM Sans)
    └── js/
        ├── quiz.js          # Timer, progress bar, AJAX submission & modal
        └── practice.js      # Interactive self-paced answer checking & accordion reveal
```
