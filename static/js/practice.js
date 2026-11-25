// PrepPilot Self-Paced Practice Mode Script

document.addEventListener("DOMContentLoaded", () => {
  // Option button click selection
  document.querySelectorAll(".practice-options").forEach(optContainer => {
    const buttons = optContainer.querySelectorAll(".practice-opt-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  });
});

function checkPracticeAnswer(qid) {
  const card = document.getElementById(`q-${qid}`);
  if (!card) return;

  const correctAnswer = card.dataset.answer.trim().toUpperCase();
  const optContainer = card.querySelector(".practice-options");
  const selectedBtn = optContainer.querySelector(".practice-opt-btn.selected");

  if (!selectedBtn) {
    alert("Please select an option before checking the answer.");
    return;
  }

  const userChoice = selectedBtn.dataset.letter.trim().toUpperCase();
  const allButtons = optContainer.querySelectorAll(".practice-opt-btn");

  allButtons.forEach(btn => {
    const letter = btn.dataset.letter.trim().toUpperCase();
    btn.classList.remove("opt-correct", "opt-wrong");

    if (letter === correctAnswer) {
      btn.classList.add("opt-correct");
    } else if (letter === userChoice && userChoice !== correctAnswer) {
      btn.classList.add("opt-wrong");
    }
  });

  // Automatically reveal explanation
  const expBox = document.getElementById(`exp-${qid}`);
  if (expBox) {
    expBox.classList.remove("hidden");
  }

  // Update check button state
  const checkBtn = card.querySelector(".check-answer-btn");
  if (checkBtn) {
    if (userChoice === correctAnswer) {
      checkBtn.innerHTML = "Correct! ✓";
      checkBtn.classList.add("btn-success");
    } else {
      checkBtn.innerHTML = "Incorrect ✗";
      checkBtn.classList.add("btn-danger");
    }
  }
}

function toggleExplanation(qid) {
  const expBox = document.getElementById(`exp-${qid}`);
  if (!expBox) return;

  const isHidden = expBox.classList.contains("hidden");
  if (isHidden) {
    expBox.classList.remove("hidden");
  } else {
    expBox.classList.add("hidden");
  }
}
