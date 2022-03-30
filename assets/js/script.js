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
  var questionNumber = 0;
  var askQuestion = JSON.parse(localStorage.getItem(questions[questionNumber]));

  function correctAnswer() {
    // storedScore = storedScore + 20;
    answerWrongOrRight.innerHTML = "<p>You Got It! Correct!</p>";
    console.log("correct answer!");
    localStorage.setItem("userScore", parseInt(score) + 5);
    getScore();
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(1000).then(() => renderQuestions());
    questionNumber++;
  }

  function incorrectAnswer() {
    answerWrongOrRight.innerHTML = "<p>Ooh, bummer. That's Incorrect.</p>";
    console.log("incorrect");
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    delay(1000).then(() => renderQuestions());
    questionNumber++;
  }

  if (questionNumber < 5) {
    questionCard.children[0].children[0].innerHTML = askQuestion.question;

    questionCard.children[1].innerHTML = `<ul>
  <li><button id="1" class="ansButton">${askQuestion.answer1}</button></li>
  <li><button id="2" class="ansButton">${askQuestion.answer2}</button></li>
  <li><button id="3" class="ansButton">${askQuestion.answer3}</button></li>
  <li><button id="4" class="ansButton">${askQuestion.answer4}</button></li>
  </ul>
  `;

    questionCard = addEventListener("click", function (event) {
      console.log(event.srcElement.id);

      var element = event.target;

      if (event.srcElement.id == askQuestion.correctAnswer) {
        correctAnswer();
      }

      if (
        event.srcElement.id != askQuestion.correctAnswer &&
        element.matches(".ansButton")
      ) {
        incorrectAnswer();
      }
    });
  } else {
    displayResults();
  }
}

function displayResults() {
  finalScore.setAttribute("class", "card show");

  questionCard.setAttribute("class", "hide");

  console.log("Your Score Is:" + score);

  finalScore.children[1].innerHTML = `<ul>
  <li>${highScore.name} + " ..... " ${highScore.score}</li>
  </ul>
  `;

  var highScore = {
    name: `${finalScore.event.returnValue}`,
    score: score,
  };

  localStorage.setItem("highScore", JSON.stringify(highScore));

  finalScore = addEventListener("click", function (event) {
    // EVENT LISTENER OR??
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log(event.returnValue);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    showHighScores();
  });
}

function showHighScores() {
  showHighScores.setAttribute("class", "card show");

  finalScore.setAttribute("class", "hide");
  finalScore.children[1].innerHTML = `<h2> Your Score is ${score}.</h2>`;
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
  console.log(secondsLeft + " Seconds Left!");
}

function init() {
  startButton.addEventListener("click", function (event) {
    // var element = event.target; // --- PROBLEM HERE??
    if (event.target.matches(".startBtn")) {
      // -- PROBLEM HERE??
      localStorage.setItem("userScore", 0);
      startGame();
    }
  });
}

init();
