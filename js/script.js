// Objects --------------------------------------------------------------------
var challengePane = {
  introduction:
    "To answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
};

var questionSet = [
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
// DOM ------------------------------------------------------------------------
const intro = document.getElementById("intro-container");
const quiz = document.getElementById("question-container");
const prompt = document.getElementById("question");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const timer = document.getElementById("timer");

// const lastQuestionIndex = questionSet.length - 1;
let runningQuestionIndex = 0;



// functions
function renderQuestion(){
    let q = questionSet[runningQuestionIndex];
    prompt.innerHTML = "<h3>" + q.question + "</h3>";
    choice1.innerHTML = q.choices[0];
    choice2.innerHTML = q.choices[1];
    choice3.innerHTML = q.choices[2];
    choice4.innerHTML = q.choices[3];
}

function checkAnswer(answer){
    if (answer == questionSet.runningQuestionIndex.correctAnswer){
        // answer is correct. add 10 seconds
    } else{
        // answer is wrong. remove 15 seconds
    }
    // if (runningQuestionIndex < lastQuestionIndex){
    //     runningQuestionIndex++;
    //     renderQuestion();
    // }
    renderQuestion();
}

function isCorrectAnswer(){
    document.getElementById(runningQuestionIndex).style
}

// Interval -------------------------------------------------------------------
var timeEl = document.getElementById("#time");
var counter = 60;

function countDownTimer() {
    var timeInterval = setInterval(function() {
        counter--;
        timeEl.textContent = counter;

        if (counter === 0) {
            clearInterval(timeInterval);
        }
    });
}

// Calls ----------------------------------------------------------------------
intro.style.display = "none";
renderQuestion();
quiz.style.display = "block";