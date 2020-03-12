// DOM ------------------------------------------------------------------------
const introContainerEl = document.getElementById("intro-container");
const quizContainerEl = document.getElementById("question-container");
const scoreContainerEl = document.getElementById("score-container");
const startQuizButtonEl = document.getElementById("start-quiz");
const questionEl = document.getElementById("question");
const choice1El = document.getElementById("choice1");
const choice2El = document.getElementById("choice2");
const choice3El = document.getElementById("choice3");
const choice4El = document.getElementById("choice4");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("displayScore");
const submitEl = document.getElementById("submit");
const initialsInput = document.getElementById("inputInitials");

var questionIndex = 0;
var timeInterval;
var timeLeft = 60;

startQuizButtonEl.addEventListener("click", triggerQuizChallenge);
choice1El.addEventListener("click", function() {checkAnswer(0);});
choice2El.addEventListener("click", function() {checkAnswer(1);});
choice3El.addEventListener("click", function() {checkAnswer(2);});
choice4El.addEventListener("click", function() {checkAnswer(3);});
submitEl.addEventListener("click", function(event){
  event.preventDefault();
  console.log(event);
  submitUserScore();
});

// Functions ------------------------------------------------------------------
function triggerQuizChallenge() {
    introContainerEl.setAttribute("style", "display: none");
    quizContainerEl.setAttribute("style", "display: block");
    renderQuestion();
    countDownTimer();
}   

function renderQuestion() {
  let currentQuestion = questions[questionIndex];
  questionEl.innerHTML = "<h3>" + currentQuestion.question + "</h3>";
  choice1El.innerHTML = currentQuestion.choices[0];
  choice2El.innerHTML = currentQuestion.choices[1];
  choice3El.innerHTML = currentQuestion.choices[2];
  choice4El.innerHTML = currentQuestion.choices[3];
}

function checkAnswer(answer) {
  if (answer === questions[questionIndex].correctAnswer) {
    console.log(answer + " equals " + questions[questionIndex].correctAnswer);
    // Do nothing with the setTimeout timer.
  } else {
    console.log(
      answer + " does not equal " + questions[questionIndex].correctAnswer);
    // Remove 15 seconds from the setTimeout timer.
    deductTime();
  }
  if (questionIndex >= questions.length - 1) {
    // Stop the timer
    stopCountDownTimer();
    console.log(timeLeft);
    // Show the next screen
    triggerScoreBoard();
  } else {
    questionIndex++;
  }
  renderQuestion();
}

function triggerScoreBoard() {
  quizContainerEl.setAttribute("style", "display: none");
  scoreContainerEl.setAttribute("style", "display: block");
  scoreEl.textContent = "Your score is " + timeLeft + ".";
}

function countDownTimer() {
  timeInterval = setInterval(function(){
    timeLeft--;
    timerEl.textContent = "Time " + timeLeft;

    if (timeLeft < 0) {
      stopCountDownTimer();
      timerEl.textContent = "Time";
      triggerScoreBoard();
    }
  }, 1000);
}

function deductTime() {
  timeLeft -= 15;
}

function stopCountDownTimer() {
  if(timeLeft < 0){
    timeLeft = 0;
  }
  clearInterval(timeInterval);
}

function submitUserScore() {
  //Todo: Take 'timeLeft' score and store to localStorage.
  //      On 'click' proceed to 'highscores-container'.
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
}
// Objects --------------------------------------------------------------------
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    correctAnswer: 3
  },
  {
    question:
      "String values must be closed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console log"],
    correctAnswer: 3
  }
];

var user = {
  initials: initialsInput.value.trim(),
  score: timeLeft
};