var state = "start";

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var questionsEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");

var currentQuestionNumber = 0;

function displayState() {
    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        endEl.style.display = "none";

    }
    if (state === "quiz") {
        startEl.style.display = "none";
        quizEl.style.display = "quiz";
        endEl.style.display = "none";

    }
    if (state === "end") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = "end";

    }
}


var questions = [];

function displayQuestion() {

    var question = questions[currentQuestionNumber]

    questionsEl.textContent = question.text;

    var answer;

    

    for (var i = 0; i < question.answers.length; i++) {
        answer = document.createElement("li");
        answer.textContent = question.answers[i];
        answersEl.appendChild(answer);
    }
    
}

function setupQuestions() {

    var question = {
        text: "What color is the sky?",
        answers: ["red","orange","blue"],
        actualAnswer: 2
    };
    questions.push(question);

    question = {
        text: "What size is a buidling",
        answers: ["small","medium","large"],
        actualAnswer: 2
    };
    questions.push(question);

    question = {
        text: "Is this working?",
        answers: ["idk","maybe","certainly"],
        actualAnswer: 2
    };
    questions.push(question);

    question = {
        text: "Why can't I think of any questions?",
        answers: ["multi-tasking","difficult concept","new subject"],
        actualAnswer: 2
    };
    questions.push(question);

    question = {
        text: "Is cs hard?",
        answers: ["Yes","Very much","Of course"],
        actualAnswer: 2
    };
    questions.push(question);
    
}

function startQuiz() {
    state = "quiz";
    displayState();
    setupQuestions();
    displayQuestion();
}

function init() {
    displayState();
}

startButton.addEventListener("click", startQuiz());

answersEl.addEventListener("click", function(event) {
    console.log(event.target);
    currentQuestionNumber++;
    displayQuestion();
});



init();
