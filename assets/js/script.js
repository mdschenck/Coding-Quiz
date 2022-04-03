var timerElement = document.querySelector("#timerElement");
var startButton = document.querySelector("#startButton");
var goBackButton = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");
var welcomeCard = document.querySelector("#welcomeCard");
var questionCard = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var answerWrongOrRight = document.querySelector("#answerWrongOrRight");
var start = document.querySelector("#start");
var finalScore = document.querySelector("#finalScore");
var showHighScores = document.querySelector("#showHighScores");
var cardHeader = document.querySelector(".qCard-header");
var cardBody = document.querySelector(".qCard-body");
var cardFooter = document.querySelector(".qCard-footer");
var fsCardBody = document.querySelector(".fsCard-body");
var formInput = document.querySelector("#formInput");
var highScoreList = document.querySelector("#highScoreList");

var storedScore = localStorage.getItem("userScore");
var score = 0;
let secondsLeft = 60;
var questionNumber = 0;

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
  question: "Question 3?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "1",
};

var question4 = {
  question: "Question 4?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "2",
};

var question5 = {
  question: "Question 5?",
  answer1: "Blue",
  answer2: "Red",
  answer3: "Green",
  answer4: "Yellow",
  correctAnswer: "3",
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

// var highScore = {
//   name: "name",
//   score: "score",
// };

var highScoreArray = [];

var highScoreNumber = 0;

console.log(question1);

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

function stopGame() {
  // displayResults();
}
//    ** QUESTION DISPLAY **

function showQuestions() {
  questionCard.setAttribute("class", "card show");
  welcomeCard.setAttribute("class", "hide");
  start.setAttribute("class", "hide");
}

function renderQuestions() {
  var askQuestion = JSON.parse(localStorage.getItem(questions[questionNumber]));

  cardHeader.innerHTML = "";
  cardBody.innerHTML = "";
  answerWrongOrRight.innerHTML = "";

  console.log(`on question number: ${questionNumber}`);

  if (questionNumber < 5) {
    cardHeader.innerHTML = "<h2>" + askQuestion.question + "</h2>";
    cardBody.innerHTML = `<ul>
  <li><button id="1" class="ansButton btn">${askQuestion.answer1}</button></li>
  <li><button id="2" class="ansButton btn">${askQuestion.answer2}</button></li>
  <li><button id="3" class="ansButton btn">${askQuestion.answer3}</button></li>
  <li><button id="4" class="ansButton btn">${askQuestion.answer4}</button></li>
  </ul>
  `;

    questionCard = addEventListener("click", function (event) {
      console.log(event.target.id);
      event.stopPropagation();
      event.stopImmediatePropagation();
      var element = event.target;

      if (element.matches(".ansButton")) {
        if (event.target.id == askQuestion.correctAnswer) {
          correctAnswer();
        }

        if (event.target.id !== askQuestion.correctAnswer) {
          incorrectAnswer();
        }
      }
    });
  } else {
    displayResults();
  }
}

function correctAnswer() {
  questionNumber++;
  score++;
  answerWrongOrRight.innerHTML = "<p>You Got It! Correct!</p>";
  console.log("correct answer!");
  localStorage.setItem("userScore", parseInt(score));
  getScore();
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() => renderQuestions());
  console.log(
    `on question number: ${questionNumber} at correct answer function`
  );
  console.log("Your Score Is:" + score + " at Correct Answer function");
}

function incorrectAnswer() {
  questionNumber++;
  answerWrongOrRight.innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
  console.log("incorrect");
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(1000).then(() => renderQuestions());

  console.log(
    `on question number: ${questionNumber} at incorrect answer function`
  );
  console.log("Your Score Is:" + score + " at Incorrect Answer function");
}

function displayResults() {
  finalScore.setAttribute("class", "card show");

  // questionCard.setAttribute("class", "hide");  // *******CANNOT READ PROPERTIES OF UNDEFINED??? ******
  fsCardBody.innerHTML = `<h2> Your Score Is: ${score} </h2>`;
  console.log("Your Score Is:" + score);
  recordScore();
}

function showScores() {
  console.log("SHOW HIGH SCORES?");
  showHighScores.setAttribute("class", "card show");
  finalScore.setAttribute("class", "hide");
  finalScore.children[0].innerHTML = `<h2> High Scores </h2>`;

  highScore = {
    name: `${formInput.value}`,
    score: score,
  };

  highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];
  highScoreArray.push(highScore);
  alert(highScoreArray);
  localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
  console.log(highScoreArray);

  for (var i = 0; i < 5; i++) {
    var hScore = highScoreList.createElement("li"); //******** CREATE ELEMENT IS NOT A FUNCTION??? */
    hScore.innerHTML = `<h2>${highScoreArray[i].name} .................. ${highScoreArray[i].score}</h2>`;
    highScoreList.append(hScore);
  }

  goBack.addEventListener("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (event.target.matches("#goBack")) {
      startGame();
      console.log("GO BACK");
    }
  });

  clearHighScores.addEventListener("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (event.target.matches("#clearHighScores")) {
      localStorage.clear();
      init();
      console.log("CLEAR HIGH SCORES");
      showHighScores.children[1].innerHTML = "";
    }
  });
}

// TIMER SECTION

function setTimer() {
  var timerInterval = setInterval(function () {
    if (secondsLeft > 0) {
      secondsLeft--;
      timerElement.textContent = secondsLeft;
    } else {
      clearInterval(timerInterval);
      stopGame();
    }
  }, 1000);
}

function init() {
  startButton.addEventListener("click", function (event) {
    if (event.target.matches(".startBtn")) {
      localStorage.setItem("userScore", 0);
      startGame();
    }
  });
}

function recordScore() {
  finalScore.addEventListener("submit", function (event) {
    event.preventDefault();
    highScoreNumber++;

    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log(formInput.value);
    showScores();
  });
}

init();
