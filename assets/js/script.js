var timerElement = document.querySelector("#timerElement");
var startButton = document.querySelector("#startButton");
var goBackButton = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");
var welcomeCard = document.querySelector("#welcomeCard");
var questionCard = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var answerWrongOrRight = document.querySelector("#answerWrongOrRight");

var score = 0;
let secondsLeft = 60;

var question = document.getElementById("#question");
var answer1 = document.getElementById(".btn1");
var answer2 = document.getElementById(".btn2");
var answer3 = document.getElementById(".btn3");
var answer4 = document.getElementById(".btn4");

var question1 = {
  question: "What Color Is The Sky?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "",
};

var question2 = {
  question: "What Color Is The Sky?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "",
};

var question3 = {
  question: "What Color Is The Sky?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "",
};

var question4 = {
  question: "What Color Is The Sky?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "",
};

var question5 = {
  question: "What Color Is The Sky?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "",
};

localStorage.setItem("questionOne", JSON.stringify(question1));
localStorage.setItem("questionTwo", JSON.stringify(question2));
localStorage.setItem("questionThree", JSON.stringify(question3));
localStorage.setItem("questionFour", JSON.stringify(question4));
localStorage.setItem("questionFive", JSON.stringify(question5));

console.log(question1);

function getScore() {
  var storedScore = localStorage.getItem("userScore");
  if (storedScore === null) {
    score = 0;
  } else {
    score = storedScore;
  }
}

function init() {
  getScore();
}

// localStorage.setItem("StoredScore", storedScore);

function clearInterval() {
  timerInterval = 0;
}

function startGame() {
  // startButton.disabled = true; //disables start button
  setTimer();
  renderQuestions();
}

function stopGame() {}

function correctAnswer() {
  // storedScore = storedScore + 20;
  answerWrongOrRight.children[0].innerHTML = "<p>You Got It! Correct!</p>";
  console.log("correct answer!");
}

function incorrectAnswer() {
  answerWrongOrRight.children[0].innerHTML =
    "<p>Ooh, bummer. That's Incorrect.</p>";
  console.log("incorrect");
}

//    ** QUESTION ONE **

// Need For Loop i < 5 ------ REFERENCE ARRAY Objects in local storage.

function renderQuestions() {
  questionCard.setAttribute("class", "show");

  questionCard.children[0].children[0].textContent =
    "What do horseys like to eat for din din";
  questionCard.children[1].children[0].innerHTML = `<ul>
<li><button id="1" id="btn1">green sludge</button></li>
<li><button id="2" id="btn2">carbourators</button></li>
<li><button id="3" id="btn3">old shoes</button></li>
<li><button id="4" id="btn4">Apples!</button></li>
</ul>
`;

  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var btn3 = document.querySelector(".btn3");
  var btn4 = document.querySelector(".btn4");
}

// TIMER SECTION

function setTimer() {
  if (secondsLeft > 0) {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerElement.textContent = secondsLeft;
    }, 1000);

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      stopGame();
      return;
    }
    return;
    console.log(secondsLeft + " Seconds Left!");
  }
}

startButton = addEventListener("click", function () {
  event.preventDefault();
  startGame();
});
