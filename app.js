// var startBtn = document.querySelector("#startButton");
var countDown = 75;
var questionIndex = 0;
// var createDiv = document.createElement("div");
//     createDiv.setAttribute("id", "createDiv")

// array for questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
];

// function

function startGame(){
    document.getElementById("Timer").textContent = "Time: " + countDown;
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestions()
}

function showQuestions(){
    document.getElementById("Question").textContent = questions[0].title;
    document.getElementById("answer1").textContent = questions[0].choices[0];
    document.getElementById("answer2").textContent = questions[0].choices[1];
    document.getElementById("answer3").textContent = questions[0].choices[2];
    document.getElementById("answer4").textContent = questions[0].choices[3];
}


    
    

// Event Listener to Start Quiz

document.getElementById("startButton").addEventListener("click", startGame)

// Event Listener to quiz answers


document.getElementById("answer1").addEventListener("click", function(){
    if(questions[0].choices[0] == questions[questionIndex].answer){
        alert("Correct!");
    } else {
        alert("Wrong!");

    }
})
document.getElementById("answer2").addEventListener("click", function(){
    if(questions[0].choices[1] == questions[questionIndex].answer){
        alert("Correct!");
    } else {
        alert("Wrong!");

    }
})
document.getElementById("answer3").addEventListener("click", function(){
    if(questions[0].choices[2] == questions[questionIndex].answer){
        alert("Correct!");
    } else {
        alert("Wrong!");

    }
})
document.getElementById("answer4").addEventListener("click", function(){
    if(questions[0].choices[3] == questions[questionIndex].answer){
        alert("Correct!");
    } else {
        alert("Wrong!");

    }
})