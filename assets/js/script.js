var timerElement = document.querySelector("#timerElement");
var startButton = document.querySelector("#start-button");
var goBackButton = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");

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

function startGame() {
  isWin = false;
  timerCount = 10;
  startButton.disabled = true; //disables start button
  setTimer();
}

//NEED EVENT LISTENER for

// startButton.addEventListenter("click", startGame);
// TIMER SECTION

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

    console.log(secondsLeft + " Seconds Left!");
  }, 1000);
}

setTimer();
