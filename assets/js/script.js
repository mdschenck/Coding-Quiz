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
  correctAnswer: "1",
};

var question2 = {
  question: "What Color Is A Banana?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "4",
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

var questions = [
  "questionOne",
  "questionTwo",
  "questionThree",
  "questionFour",
  "questionFive",
];

console.log(question1);

console.log(questions[1]);

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
  showQuestions();
  renderQuestions();
}

function stopGame() {}

function correctAnswer() {
  // storedScore = storedScore + 20;
  answerWrongOrRight.children[2].children[3] = "<p>You Got It! Correct!</p>";
  console.log("correct answer!");
}

function incorrectAnswer() {
  questionCard.children[2].innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
  console.log("incorrect");
}

//    ** QUESTION ONE **

// Need For Loop i < 5 ------ REFERENCE ARRAY Objects in local storage.

// function getQuestion() {

// if (lastGrade !== null) {
//   document.querySelector(".message").textContent =
//     lastGrade.student + " received a/an " + lastGrade.grade;
// }

function showQuestions() {
  questionCard.setAttribute("class", "card show");
  welcomeCard.setAttribute("class", "hide");
}

function renderQuestions() {
  var askQuestion = JSON.parse(localStorage.getItem(questions[0]));

  function correctAnswer() {
    // storedScore = storedScore + 20;
    answerWrongOrRight.innerHTML = "<p>You Got It! Correct!</p>";
    console.log("correct answer!");
  }

  function incorrectAnswer() {
    answerWrongOrRight.innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
    console.log("incorrect");
  }

  questionCard.children[0].children[0].textContent = askQuestion.question;

  questionCard.children[1].innerHTML = `<ul>
  <li><button id="1">${askQuestion.answer1}</button></li>
  <li><button id="2">${askQuestion.answer2}</button></li>
  <li><button id="3">${askQuestion.answer3}</button></li>
  <li><button id="4">${askQuestion.answer4}</button></li>
  </ul>
  `;

  questionCard = addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);

    if (event.target == askQuestion.correctAnswer) {
      correctAnswer();
      console.log("yay");
    }

    if (event.target != askQuestion.correctAnswer) {
      incorrectAnswer();
      console.log("boo");
    }
  });
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
