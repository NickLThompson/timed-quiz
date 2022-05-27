var state = "start";
// bringing html to js document
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var highscoresEl = document.querySelector("#highscores");
var startButton = document.querySelector("#start button");
var submitButton = document.querySelector("#submit")
var quizTitle = document.querySelector("#quiz #title");
var questionsEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var clockEl = document.querySelector("#clock");
var finalscore = document.querySelector("#finalscore");

var currentQuestionNumber = 0;


// managing the start, quiz, and end states
function displayState() {
    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        endEl.style.display = "none";
        highscoresEl.style.display = "none";

    }
    if (state === "quiz") {
        startEl.style.display = "none";
        quizEl.style.display = "block";
        endEl.style.display = "none";
        highscoresEl.style.display = "none";

    }
    if (state === "end") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = "block";
        highscoresEl.style.display = "none";

    }
    if (state === "highscores") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = "none";
        highscoresEl.style.display = "block";
    }
}


var questions = [];

// function that displays the quiz questions
function displayQuestion() {
    var question = questions[currentQuestionNumber]
    var answer;
    questionsEl.textContent = question.text;

    for (var i = answersEl.children.length - 1; i >= 0; i--) {
        answersEl.removeChild(answersEl.childNodes[i]);
    }

    for (var i = 0; i < question.answers.length; i++) {
        answer = document.createElement("li");
        answer.textContent = question.answers[i];
        answersEl.appendChild(answer);
    }
    
}

var questionsCorrect = 0;

// function that sets up the quiz questions
function setupQuestions() {

    var question = {
        text: "Where do you insert Javascript into an HTML document?",
        answers: ["Bottom","Middle","Top", "You don't"],
        actualAnswer: 0
    }
        questions.push(question);


    question = {
        text: "How can one write out hello world? in JavaScript?",
        answers: ["console.log(hello world!)","document.write(hello, world!)","alert(hello, world!)", "all of the above"],
        actualAnswer: 3
    };
    questions.push(question);

    question = {
        text: "How do you write comments in Javascript?",
        answers: ["I'm not sure"," // ","/ /", "* *"],
        actualAnswer: 1
    };
    questions.push(question);

    question = {
        text: "What is the name of the program we use to run console commands?",
        answers: ["Git","Node","OS", "Linux"],
        actualAnswer: 0
    };
    questions.push(question);

    question = {
        text: "What do we always name our HTML files?",
        answers: ["script.html","style.html","index.html", "whatever name you prefer"],
        actualAnswer: 2
    };
    questions.push(question);
    
    
}

var secondsLeft = 30;

// creates and displays the timer
function displayTimer() {
    timerEl.textContent = secondsLeft;
}

function startTimer() { 
timerEl.textContent = secondsLeft + " seconds remaining"
var timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 0) {
        displayTimer();
    } else {
        timerEl.textContent = "Times up!";
        clearInterval(timerInterval)
    }
    
}, 1000);
}

// starting the quiz
function startQuiz() {
    state = "quiz";
    displayState();
    setupQuestions();
    displayQuestion();
    startTimer();
}


// displaying the end of the quiz
function displayEnd() {
    state = "end";
    displayState();
    var veryFinalScore = "Your final score is: " + secondsLeft;

    finalscore.textContent = veryFinalScore;
}

function submitInitials() {
        highscores();
}

function highscores() {
    state = "highscores"
    displayState();


}

function init() {
    displayState();
}

// begin and submit buttons
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", highscores);


answersEl.addEventListener("click", function(event) {
    currentQuestionNumber++;

    for (var i = answersEl.children.length - 1; i >= 0; i--) {
        answersEl.removeChild(answersEl.childNodes[i]);
    }

    if (currentQuestionNumber === questions.length) {
        displayEnd();
    } else {
        displayQuestion();
    }
});




init();
