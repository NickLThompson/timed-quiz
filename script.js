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


function setupQuestions() {

    var question = {
        text: "Where do you insert Javascript into an HTML document?",
        answers: ["Bottom","Middle","Top", "You don't"],
        actualAnswer: 0
    };
    questions.push(question);

    question = {
        text: "How can one write out hello world? in JavaScript?",
        answers: ["console.log(hello world!)","document.write(hello, world!)","alert(hello, world!)", "all of the above"],
        actualAnswer: 3
    };
    questions.push(question);

    question = {
        text: "How do you write comments in Javascript?",
        answers: ["idk"," // ","/ /", "* *"],
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
