var timerElement = document.querySelector("#timerElement");
var startButton = document.querySelector("#startButton");
var goBackButton = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");
var welcomeCard = document.querySelector("#welcomeCard");
var questionCard = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var answerWrongOrRight = document.querySelector("#answerWrongOrRight");
var start = document.querySelector("#start");

var storedScore = localStorage.getItem("userScore");
var score = 0;
let secondsLeft = 120;

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
  if (storedScore === null) {
    storedScore = 0;
  } else {
    score = storedScore;
  }
}

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

//    ** QUESTION DISPLAY **

function showQuestions() {
  questionCard.setAttribute("class", "card show");
  welcomeCard.setAttribute("class", "hide");
  start.setAttribute("class", "hide");
}

function renderQuestions() {
  var askQuestion = JSON.parse(localStorage.getItem(questions[0]));

  function correctAnswer() {
    // storedScore = storedScore + 20;
    answerWrongOrRight.innerHTML = "<p>You Got It! Correct!</p>";
    console.log("correct answer!");
    localStorage.setItem("userScore", parseInt(score) + 5);
    getScore();
    // i++;
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(1000).then(() => console.log("ran after 1 second1 passed"));
    renderQuestion2();
  }

  function incorrectAnswer() {
    answerWrongOrRight.innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
    console.log("incorrect");
    // i++;
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    delay(1000).then(() => console.log("ran after 1 second1 passed"));
    renderQuestion2();
  }

  questionCard.children[0].children[0].innerHTML = askQuestion.question;

  questionCard.children[1].innerHTML = `<ul>
  <li><button id="1" >${askQuestion.answer1}</button></li>
  <li><button id="2" >${askQuestion.answer2}</button></li>
  <li><button id="3" >${askQuestion.answer3}</button></li>
  <li><button id="4" >${askQuestion.answer4}</button></li>
  </ul>
  `;

  questionCard = addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log(event.srcElement.id);

    if (event.srcElement.id == askQuestion.correctAnswer) {
      correctAnswer();
    }

    if (event.srcElement.id != askQuestion.correctAnswer) {
      incorrectAnswer();
    }
  });
}

function renderQuestion2() {
  var askQuestion = JSON.parse(localStorage.getItem(questions[1]));

  function correctAnswer() {
    answerWrongOrRight.innerHTML = "<p>You Got It! Correct!</p>";
    console.log("correct answer!");
    localStorage.setItem("userScore", parseInt(score) + 5);
    getScore();
    // i++;
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    delay(1000).then(() => console.log("ran after 1 second1 passed"));
    displayResults();
  }

  function incorrectAnswer() {
    answerWrongOrRight.innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
    console.log("incorrect");
    // i++;
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    delay(1000).then(() => console.log("ran after 1 second1 passed"));
    displayResults();
  }

  questionCard.children[1].children[0].textContent = askQuestion.question;

  // questionCard.children[1].innerHTML = `<ul>
  // <li><button id="1" >${askQuestion.answer1}</button></li>
  // <li><button id="2" >${askQuestion.answer2}</button></li>
  // <li><button id="3" >${askQuestion.answer3}</button></li>
  // <li><button id="4" >${askQuestion.answer4}</button></li>
  // </ul>
  // `;

  questionCard = addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.srcElement.id);

    if (event.srcElement.id == askQuestion.correctAnswer) {
      correctAnswer();
    }

    if (event.srcElement.id != askQuestion.correctAnswer) {
      incorrectAnswer();
    }
  });
}

function displayResults() {
  console.log("Your Score Is:" + score);
  console.log(i);
}

// TIMER SECTION

function setTimer() {
  if (secondsLeft > 0) {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerElement.textContent = secondsLeft;
    }, 1000);
  } else if (secondsLeft == 0) {
    clearInterval(timerInterval);
    stopGame();
    return;
  }
  return;
  console.log(secondsLeft + " Seconds Left!");
}

function init() {
  startButton = addEventListener("click", function (event) {
    localStorage.setItem("userScore", 0);
    event.preventDefault();
    event.stopPropagation();
    startGame();
  });
}

init();
