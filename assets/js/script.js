var timerElement = document.querySelector("#timerElement");
var startButton = document.querySelector("#startButton");
var goBackButton = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");
var viewHighScores = document.querySelector("#viewHighScores");
var welcomeCard = document.querySelector("#welcomeCard");
var questionCard = document.getElementById("questions");
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
var timerRun = true;

var question = document.getElementById("#question");
var answer1 = document.getElementById(".btn1");
var answer2 = document.getElementById(".btn2");
var answer3 = document.getElementById(".btn3");
var answer4 = document.getElementById(".btn4");

var question1 = {
  question:
    "What provides the basic content and structure of a web application?",
  answer1: "Javascript",
  answer2: "CSS",
  answer3: "HTML",
  answer4: "React",
  correctAnswer: "3",
};

var question2 = {
  question: "Javascript is a(n) __________ Based Programming Language",
  answer1: "Function",
  answer2: "Object",
  answer3: "Query",
  answer4: "Argumentative",
  correctAnswer: "2",
};

var question3 = {
  question: "CSS Stands for ___________ Style Sheets?",
  answer1: "Concentric",
  answer2: "Current",
  answer3: "Consecutive",
  answer4: "Cascading",
  correctAnswer: "4",
};

var question4 = {
  question: "What is a Boolean Value?",
  answer1: "True or False",
  answer2: "A number",
  answer3: "Text",
  answer4: "Falsy",
  correctAnswer: "1",
};

var question5 = {
  question: "What Programming Language Is The Most Fun?",
  answer1: "C#",
  answer2: "RoR",
  answer3: "Css",
  answer4: "Javascript!",
  correctAnswer: "4",
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

    questionCard.addEventListener("click", function (event) {
      console.log(event.target.id);

      var element = event.target;
      // ************ EVENT CAUSING TRIGGERING MULTIPLE TIMES? IF Stop proproation answers do not register?? **********
      // event.stopImmediatePropagation();

      if (element.matches(".ansButton")) {
        if (element.id == askQuestion.correctAnswer) {
          correctAnswer();
          console.log("correct answer-" + askQuestion.correctAnswer);
        }

        if (element.id != askQuestion.correctAnswer) {
          incorrectAnswer();
          console.log("incorrect answer-" + askQuestion.correctAnswer);
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
  console.log(questionCard);
  questionCard.classList.remove("show");
  questionCard.classList.add("hide");
  fsCardBody.innerHTML = `<h2> Your Score Is: ${score} </h2>`;
  console.log("Your Score Is:" + score);
  timerRun = false;
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
  localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
  console.log(highScoreArray);

  for (var i = 0; i < highScoreArray.length; i++) {
    highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];
    var hScore = document.createElement("li");
    console.log(highScoreArray.name);
    console.log(highScoreArray.score);
    highScoreArray.score;
    hScore.innerHTML = `<h2>${highScoreArray[i].name} .................. ${highScoreArray[i].score}</h2>`;
    highScoreList.append(hScore);
  }

  viewHighScores.addEventListener("click", function (event) {
    if (event.target.matches("#viewHighScores")) {
      showScores();
      console.log("SHOW SCORES");
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  });

  goBack.addEventListener("click", function (event) {
    if (event.target.matches("#goBack")) {
      location.reload();
      // startGame();
      // console.log("GO BACK");
      // event.stopPropagation();
      // event.stopImmediatePropagation();
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

function setTimer() {
  var timerInterval = setInterval(function () {
    if (secondsLeft > 0 && timerRun) {
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
