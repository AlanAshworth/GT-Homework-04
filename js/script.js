// Objects --------------------------------------------------------------------
var challengePane = {
  introduction:
    "To answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
};

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
// DOM ------------------------------------------------------------------------
const introContainer = document.getElementById("intro-container");
const startContainer = document.getElementById("start-quiz");
const quizContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const timer = document.getElementById("timer");

// const lastQuestionIndex = questionSet.length - 1;
let runningQuestionIndex = 0;


startContainer.addEventListener("click", function(){
  introContainer.setAttribute("style", "display: none");
  quizContainer.setAttribute("style", "display: block");
  renderQuestion();
})

choice1.addEventListener("click", function(){
  
  // runningQuestionIndex++;
  // renderQuestion();
  checkAnswer();
})
choice2.addEventListener("click", function(){
  // runningQuestionIndex++;
  // renderQuestion();
  checkAnswer();
})
choice3.addEventListener("click", function(){
  // runningQuestionIndex++;
  // renderQuestion();
  checkAnswer();
})
choice4.addEventListener("click", function(){
  // runningQuestionIndex++;
  // renderQuestion();
  checkAnswer();
})

// functions
function renderQuestion(){
    let currentQuestion = questions[runningQuestionIndex];
    question.innerHTML = "<h3>" + currentQuestion.question + "</h3>";
    choice1.innerHTML = currentQuestion.choices[0];
    choice2.innerHTML = currentQuestion.choices[1];
    choice3.innerHTML = currentQuestion.choices[2];
    choice4.innerHTML = currentQuestion.choices[3];
}

function checkAnswer(answer){
  console.log(answer);
  // if (answer == questions.runningQuestionIndex.correctAnswer){
  //       console.log(answer);
  //       // answer is correct. add 10 seconds
  //       // increment question
  //   } else{
  //     console.log(answer);
  //     console.log("not correct!");
  //       // answer is wrong. remove 15 seconds
  //       // increment question
  //   }
    // if (runningQuestionIndex < lastQuestionIndex){
    //     runningQuestionIndex++;
    //     renderQuestion();
    // }
    renderQuestion();
}

function nextQuestion(){
  choice1.addEventListener("click", function(){
    this.questions[runningQuestionIndex++];
  })
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
