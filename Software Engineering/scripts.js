const initialQuestions = [
  {
    question: "What is the primary goal of software engineering?",
    options: [
      "Writing code quickly",
      "Developing cheaper, better, and faster software",
      "Designing marketing strategies",
      "Selling hardware systems",
    ],
    answer: "Developing cheaper, better, and faster software",
  },
  {
    question: "Which is an example of system software?",
    options: [
      "Airline seat reservation system",
      "Compilers",
      "Mobile games",
      "Microsoft Word",
    ],
    answer: "Compilers",
  },
  {
    question:
      "What percentage of software engineering costs is typically allocated to testing?",
    options: ["20%", "40%", "60%", "80%"],
    answer: "40%",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentQuestions = initialQuestions.map((q) => ({
  ...q,
  options: [...q.options],
}));
let retryQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");

  questionEl.style.opacity = "0";
  optionsEl.innerHTML = "";
  document.querySelector(".next-btn").style.display = "none";

  setTimeout(() => {
    const currentQ = currentQuestions[currentQuestionIndex];
    questionEl.innerHTML = `
            ${currentQ.question}
            <div class="shuffle-notice"></div>
          `;
    questionEl.style.opacity = "1";
  }, 200);

  const currentQ = currentQuestions[currentQuestionIndex];
  shuffleArray(currentQ.options);
  currentQ.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, button));
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selected, button) {
  const correct = currentQuestions[currentQuestionIndex].answer;
  const allButtons = document.querySelectorAll(".options button");

  allButtons.forEach((btn) => (btn.disabled = true));

  if (selected === correct) {
    score += 10;
    document.getElementById("score").textContent = score;
    button.classList.add("correct");
    document.getElementById("correctSound").play();
    setTimeout(nextQuestion, 1000);
  } else {
    button.classList.add("wrong");
    document.getElementById("wrongSound").play();

    const currentQ = currentQuestions[currentQuestionIndex];
    if (!retryQuestions.some((q) => q.question === currentQ.question)) {
      retryQuestions.push({
        ...currentQ,
        options: [...currentQ.options],
      });
    }

    document.querySelector(".next-btn").style.display = "block";
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    if (retryQuestions.length > 0) {
      currentQuestions = [...retryQuestions];
      retryQuestions = [];
      currentQuestionIndex = 0;
      loadQuestion();
    } else {
      document.querySelector(".container").innerHTML = `
              <h2>Quiz Completed!</h2>
              <p style="font-size: 1.2em;">Final Score: <strong>${score}</strong></p>
              <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; cursor: pointer;">
                Restart Quiz
              </button>
            `;
    }
  }
}

loadQuestion();
