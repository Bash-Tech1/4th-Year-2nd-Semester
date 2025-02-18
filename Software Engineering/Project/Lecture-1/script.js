const initialQuestions = [
  // Multiple-Choice Questions (1-30)
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
  {
    question: "Customized software is developed for:",
    options: [
      "A general market",
      "A specific customer",
      "Reducing costs",
      "Legacy systems",
    ],
    answer: "A specific customer",
  },
  {
    question: "Which is a productivity problem according to Flynn?",
    options: [
      "Poor project control",
      "Incorrect analysis",
      "Addressing the wrong problem",
      "Organizational culture neglect",
    ],
    answer: "Poor project control",
  },
  {
    question: "What does adaptive maintenance involve?",
    options: [
      "Fixing bugs",
      "Updating software for new operating systems",
      "Reducing complexity",
      "Writing documentation",
    ],
    answer: "Updating software for new operating systems",
  },
  {
    question:
      "Which is NOT a key challenge in 21st-century software engineering?",
    options: [
      "Legacy systems",
      "Heterogeneity",
      "Reduced team collaboration",
      "Faster delivery pressures",
    ],
    answer: "Reduced team collaboration",
  },
  {
    question: "A SUS score of 85 indicates:",
    options: [
      "Poor usability",
      "Average usability",
      "Exceptional usability",
      "Unacceptable usability",
    ],
    answer: "Exceptional usability",
  },
  {
    question: "What does accessibility ensure?",
    options: [
      "High performance",
      "Availability to disabled users",
      "Fast coding",
      "Low development costs",
    ],
    answer: "Availability to disabled users",
  },
  {
    question:
      "Which term refers to transferring software between computer types?",
    options: ["Portability", "Reliability", "Maintainability", "Usability"],
    answer: "Portability",
  },
  {
    question: "What is the difference between a fault and a failure?",
    options: [
      "A fault is a coding error; a failure is its observable consequence",
      "They are synonymous",
      "A fault occurs during testing; a failure occurs during deployment",
      "A failure is caused by hardware issues",
    ],
    answer:
      "A fault is a coding error; a failure is its observable consequence",
  },
  {
    question: "Which is a quality problem according to Flynn?",
    options: [
      "Changing requirements",
      "Poor project control",
      "Incorrect analysis",
      "Unrealistic schedules",
    ],
    answer: "Incorrect analysis",
  },
  {
    question: "UML is primarily used for:",
    options: [
      "Writing code in Java",
      "Communicating system designs independently of programming language",
      "Reducing project costs",
      "Testing software reliability",
    ],
    answer:
      "Communicating system designs independently of programming language",
  },
  {
    question: "Which is NOT a component of a system's blueprint?",
    options: ["Actors", "Marketing plans", "Use cases", "Concepts/Objects"],
    answer: "Marketing plans",
  },
  {
    question: "What does effectiveness mean in software engineering?",
    options: [
      "Doing the right task",
      "Minimizing errors",
      "Fast execution",
      "Reducing costs",
    ],
    answer: "Doing the right task",
  },
  {
    question: "Which is a reason for IS project failure?",
    options: [
      "Realistic schedules",
      "Appropriate staffing",
      "Poor quality work",
      "Stable requirements",
    ],
    answer: "Poor quality work",
  },
  {
    question: "What does usability testing measure?",
    options: [
      "Code efficiency",
      "Ease of use",
      "Budget compliance",
      "Hardware compatibility",
    ],
    answer: "Ease of use",
  },
  {
    question: "Which is a goal of software engineering?",
    options: [
      "Increasing complexity",
      "High reliability",
      "Avoiding documentation",
      "Ignoring user feedback",
    ],
    answer: "High reliability",
  },
  {
    question: "Which activity is part of software process models?",
    options: [
      "Financial auditing",
      "Requirement elicitation",
      "Hardware manufacturing",
      "Marketing analysis",
    ],
    answer: "Requirement elicitation",
  },
  {
    question: "What is the role of a system analyst?",
    options: [
      "Writing code",
      "Defining user requirements",
      "Testing hardware",
      "Managing budgets",
    ],
    answer: "Defining user requirements",
  },
  {
    question: "Which is NOT an attribute of good software?",
    options: ["Maintainability", "Complexity", "Dependability", "Usability"],
    answer: "Complexity",
  },
  {
    question: "What does heterogeneity refer to in software challenges?",
    options: [
      "Systems using mixed hardware/software",
      "Legacy system maintenance",
      "Fast delivery demands",
      "User dissatisfaction",
    ],
    answer: "Systems using mixed hardware/software",
  },
  {
    question: "Which is a reason for quality problems in projects?",
    options: [
      "Changing requirements",
      "Poor project control",
      "Addressing the wrong problem",
      "Implementation delays",
    ],
    answer: "Addressing the wrong problem",
  },
  {
    question: "What is remedial maintenance?",
    options: [
      "Adding new features",
      "Fixing bugs",
      "Porting software to new platforms",
      "Writing documentation",
    ],
    answer: "Fixing bugs",
  },
  {
    question: "Which is part of the System Usability Scale (SUS)?",
    options: [
      "Code complexity",
      "Ease of learning",
      "Budget tracking",
      "Hardware speed",
    ],
    answer: "Ease of learning",
  },
  {
    question: "What does ISAD stand for?",
    options: [
      "Information System Analysis & Design",
      "International Software Architecture Development",
      "Integrated System Application Deployment",
      "Internal Software Audit Document",
    ],
    answer: "Information System Analysis & Design",
  },
  {
    question: "Which is a key challenge for software engineering?",
    options: [
      "Reducing team size",
      "Managing legacy systems",
      "Avoiding user requirements",
      "Ignoring testing",
    ],
    answer: "Managing legacy systems",
  },
  {
    question: "What is the purpose of use cases in UML?",
    options: [
      "Define system scenarios",
      "Write code faster",
      "Reduce costs",
      "Track project timelines",
    ],
    answer: "Define system scenarios",
  },
  {
    question: "Which is a productivity problem reason?",
    options: [
      "Incorrect analysis",
      "Poor project control",
      "Organizational culture neglect",
      "Addressing the wrong problem",
    ],
    answer: "Poor project control",
  },
  {
    question: "What is software reliability?",
    options: [
      "Probability of failure-free operation",
      "Speed of execution",
      "User satisfaction",
      "Cost efficiency",
    ],
    answer: "Probability of failure-free operation",
  },

  // True/False Questions (31-45)
  {
    question: "Software engineering focuses only on coding.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "System software includes operating systems and compilers.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "Maintenance costs exceed development costs in software engineering.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "Flynn categorizes 'changing requirements' as a quality problem.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "UML is used to describe system designs independently of programming languages.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "'Adaptive maintenance' involves fixing bugs.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "A reliable software product never requires maintenance.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "Legacy systems are a key challenge in modern software engineering.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Customized software is developed for a general market.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "Usability testing measures code efficiency.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "'Effectiveness' means doing the right task.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Information systems are always implemented as software.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "The SUS score ranges from 0 to 100.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "'Portability' refers to minimizing maintenance costs.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "Poor project control is a quality problem.",
    options: ["True", "False"],
    answer: "False",
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
