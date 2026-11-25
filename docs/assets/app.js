// PrepPilot Local Storage & App State Manager

const Storage = {
  getUser() {
    const u = localStorage.getItem("preppilot_user");
    return u ? JSON.parse(u) : { name: "Student", email: "student@example.com", role: "student" };
  },
  setUser(name, email) {
    const user = { name: name || "Student", email: email || "student@example.com", role: "student" };
    localStorage.setItem("preppilot_user", JSON.stringify(user));
    return user;
  },
  getBookmarks() {
    const b = localStorage.getItem("preppilot_bookmarks");
    return b ? JSON.parse(b) : [1, 5, 12]; // sample defaults
  },
  toggleBookmark(qid) {
    qid = Number(qid);
    let bookmarks = this.getBookmarks();
    if (bookmarks.includes(qid)) {
      bookmarks = bookmarks.filter(id => id !== qid);
    } else {
      bookmarks.push(qid);
    }
    localStorage.setItem("preppilot_bookmarks", JSON.stringify(bookmarks));
    return bookmarks.includes(qid);
  },
  isBookmarked(qid) {
    return this.getBookmarks().includes(Number(qid));
  },
  getResults() {
    const r = localStorage.getItem("preppilot_results");
    if (!r) {
      // Seed initial sample attempts so charts and history look populated
      const initial = [
        {
          id: 1,
          category: "Aptitude",
          test_type: "category",
          score: 8,
          total: 10,
          percentage: 80,
          date: new Date(Date.now() - 86400000 * 2).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }),
          details: []
        },
        {
          id: 2,
          category: "TCS",
          test_type: "company",
          score: 9,
          total: 10,
          percentage: 90,
          date: new Date(Date.now() - 86400000).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }),
          details: []
        }
      ];
      localStorage.setItem("preppilot_results", JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(r);
  },
  saveResult(result) {
    const results = this.getResults();
    result.id = Date.now();
    result.date = new Date().toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    results.unshift(result);
    localStorage.setItem("preppilot_results", JSON.stringify(results));
    return result;
  },
  getPlans() {
    const p = localStorage.getItem("preppilot_plans");
    if (!p) {
      const initial = [
        { id: 1, title: "Practice Speed, Distance & Train Problems", subject: "Aptitude", due_date: "2026-12-05", completed: false },
        { id: 2, title: "Master Syllogisms & Seating Arrangements", subject: "Reasoning", due_date: "2026-12-08", completed: true },
        { id: 3, title: "Revise Binary Search Trees & Sorting", subject: "Programming", due_date: "2026-12-10", completed: false }
      ];
      localStorage.setItem("preppilot_plans", JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(p);
  },
  addPlan(title, subject, due_date) {
    const plans = this.getPlans();
    plans.push({ id: Date.now(), title, subject, due_date, completed: false });
    localStorage.setItem("preppilot_plans", JSON.stringify(plans));
  },
  togglePlan(id) {
    const plans = this.getPlans();
    const task = plans.find(p => p.id === Number(id));
    if (task) task.completed = !task.completed;
    localStorage.setItem("preppilot_plans", JSON.stringify(plans));
  },
  deletePlan(id) {
    let plans = this.getPlans();
    plans = plans.filter(p => p.id !== Number(id));
    localStorage.setItem("preppilot_plans", JSON.stringify(plans));
  },
  getGoal() {
    return Number(localStorage.getItem("preppilot_goal") || 2);
  },
  setGoal(n) {
    localStorage.setItem("preppilot_goal", n);
  }
};

// Update active user display in nav
document.addEventListener("DOMContentLoaded", () => {
  const user = Storage.getUser();
  const navUser = document.querySelector(".nav-user");
  if (navUser && user.name) {
    navUser.textContent = user.name.split(" ")[0];
  }
});
