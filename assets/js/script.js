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

function init() {}

function getScore() {
  var storedScore = localStorage.getItem("userScore");

  if (storedScore === null) {
    score = 0;
  } else {
    score = storedScore;
  }
}

function clearInterval() {
  timerInterval = 0;
}

function startGame() {
  //   startButton.disabled = true; //disables start button
  setTimer();
  renderQuestionOne();
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

function renderQuestionOne() {
  questionCard.setAttribute("class", "show");

  questionCard.children[0].children[0].textContent =
    "What do horseys like to eat for din din";
  questionCard.children[1].children[0].innerHTML = `<ul>
<li><button id="1" class="btn1">green sludge</button></li>
<li><button id="2" class="btn2">carbourators</button></li>
<li><button id="3" class="btn3">old shoes</button></li>
<li><button id="4" class="btn4">Apples!</button></li>
</ul>
`;

  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var btn3 = document.querySelector(".btn3");
  var btn4 = document.querySelector(".btn4");

  btn4.addEventListener("click", function () {
    event.preventDefault();
    correctAnswer();
    renderQuestionTwo();
  });

  btn3.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionTwo();
  });

  btn2.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionTwo();
  });

  btn1.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionTwo();
  });

  console.log(event);
}

// ** QUESTION TWO **

function renderQuestionTwo() {
  questionCard.children[0].children[0].textContent =
    "What color is a bunny rabbert";
  questionCard.children[1].children[0].innerHTML = `<ul>
<li><button id="1" class="btn">purple</button></li>
<li><button id="2" class="btn">The Sky</button></li>
<li><button id="3" class="btn">bananas</button></li>
<li><button id="4" class="btn">Such a cute light brown with grey spots and a pink nose.</button></li>
</ul>
`;
  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var btn3 = document.querySelector(".btn3");
  var btn4 = document.querySelector(".btn4");

  btn4.addEventListener("click", function () {
    event.preventDefault();
    correctAnswer();
    renderQuestionThree();
  });

  btn3.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionThree();
  });

  btn2.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionThree();
  });

  btn1.addEventListener("click", function () {
    event.preventDefault();
    incorrectAnswer();
    renderQuestionThree();
  });

  console.log(event);
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
