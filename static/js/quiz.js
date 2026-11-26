const form = document.getElementById("quiz-form");
let interval = null;
let submitted = false;

if (form) {
  const cards = [...document.querySelectorAll(".question-card")];
  const count = document.getElementById("answered-count");
  const fill = document.getElementById("progress-fill");
  const total = cards.length;

  function updateProgress() {
    const answered = cards.filter(card => card.querySelector("input:checked")).length;
    if (count) count.textContent = `${answered} of ${total} answered`;
    if (fill) fill.style.width = `${(answered / total) * 100}%`;
  }
  form.addEventListener("change", updateProgress);

  let seconds = Number(form.dataset.duration) || 600;
  const timer = document.getElementById("timer");

  function tick() {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    if (timer) {
      timer.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      if (seconds <= 60) timer.classList.add("urgent");
    }
    if (seconds <= 0) {
      submitQuiz();
      return;
    }
    seconds--;
  }

  tick();
  interval = setInterval(tick, 1000);
}

async function submitQuiz() {
  if (submitted) return;

  const cards = [...document.querySelectorAll(".question-card")];
  const total = cards.length;
  const answered = cards.filter(card => card.querySelector("input:checked")).length;
  const unanswered = total - answered;

  if (unanswered > 0) {
    const proceed = confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit the exam?`);
    if (!proceed) return;
  }

  submitted = true;
  if (interval) clearInterval(interval);

  const submitBtn = document.getElementById("submit-test-btn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting & Evaluating... ⏳";
  }

  const answers = {};
  const question_ids = [];

  cards.forEach(card => {
    const qid = card.dataset.question;
    question_ids.push(Number(qid));
    const selected = card.querySelector("input:checked");
    if (selected) {
      answers[qid] = selected.value;
    }
  });

  const formElem = document.getElementById("quiz-form");
  const category = formElem ? formElem.dataset.category : "General";
  const testType = formElem ? (formElem.dataset.testType || "category") : "category";

  try {
    const response = await fetch("/submit-quiz", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: JSON.stringify({
        category: category,
        test_type: testType,
        question_ids: question_ids,
        answers: answers
      })
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Unable to submit test.");
      submitted = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit Test & Evaluate <span>→</span>";
      }
      return;
    }

    document.getElementById("score-text").textContent = `${data.score} / ${data.total} · ${data.percentage}%`;
    const msgElem = document.getElementById("score-message");
    if (data.percentage >= 80) {
      msgElem.textContent = "Outstanding performance! You have strong placement mastery in this section.";
    } else if (data.percentage >= 50) {
      msgElem.textContent = "Good attempt! Review your incorrect answers in the solution review below.";
    } else {
      msgElem.textContent = "Needs improvement. Spend time studying the step-by-step explanations.";
    }

    const reviewLink = document.getElementById("review-solution-link");
    if (reviewLink && data.result_id) {
      reviewLink.href = `/quiz-review/${data.result_id}`;
    }

    const modal = document.getElementById("result-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.scrollIntoView({ behavior: "smooth" });
    }
  } catch (err) {
    console.error("Submission error:", err);
    alert("Network error submitting quiz. Please check your connection and try again.");
    submitted = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Submit Test & Evaluate <span>→</span>";
    }
  }
}

async function toggleQuizBookmark(qid, btn) {
  try {
    const res = await fetch(`/bookmark/${qid}`, {
      method: "POST",
      headers: { "X-Requested-With": "XMLHttpRequest" }
    });
    if (res.ok) {
      const data = await res.json();
      btn.textContent = data.saved ? "★ Saved" : "☆ Save";
    } else {
      btn.textContent = btn.textContent.includes("Saved") ? "☆ Save" : "★ Saved";
    }
  } catch (e) {
    btn.textContent = btn.textContent.includes("Saved") ? "☆ Save" : "★ Saved";
  }
}
