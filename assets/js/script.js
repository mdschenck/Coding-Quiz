let secondsLeft = 60;
var timerElement = document.querySelector();
var startButton = document.querySelector(".start-button");

function getScore() {
  var storedScore = localStorage.getItem("userScore");

  if (storedScore === null) {
    score = 0;
  } else {
    score = storedScore;
  }
}

function init() {
  getWins();
  getLosses();
}

function startGame() {
  isWin = false;
  timerCount = 10;
  startButton.disabled = true; //disables start button
  setTimer();
}

//NEED EVENT LISTENER for

startButton.addEventListenter("click", setTimer());
// TIMER SECTION

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;

    if (secondsLeft >= 0) {
      if (isWin && secondsLeft > 0) {
        clearInterval(timerInterval);
        winGame();
      }
    }
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

    console.log(secondsLeft + " Seconds Left!");
  }, 1000);
}
