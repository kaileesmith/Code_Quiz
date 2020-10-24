// var startBtn = document.querySelector("#startButton");
var timerCount = 75;
var questionIndex = 0;
var Score = 0;

gameEnd();

// array for questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts" , "numbers"],
        answer: "C" 
        // ALERTS
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "D"
        // CONSOLE LOG
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "C"
        // parentheses
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "C"
        // quotes
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "D"
        // all of the above
    },
];

// function


function startGame(){
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestions();
    startTimer();
    

}

function gameEnd(){
    document.getElementById("Highscores").style.display = "none";
    }


// function to Show Questions
var question = document.querySelector("#Question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")


function showQuestions(){
    if(questionIndex === questions.length || timerCount === 0){
        clearInterval(timer)
        alert("Your Score is " + timerCount);
        document.getElementById("quiz").style.display = "none";
        document.getElementById("Highscores").style.display = "block";
        $('p').text("Score: " + timerCount);
        var Score = JSON.stringify(localStorage.setItem("Final Score", timerCount));
        return
    }
    


    question.textContent = questions[questionIndex].title
    answer1.textContent = questions[questionIndex].choices[0]
    answer2.textContent = questions[questionIndex].choices[1]
    answer3.textContent = questions[questionIndex].choices[2]
    answer4.textContent = questions[questionIndex].choices[3]
}

showQuestions()

answer1.addEventListener("click", function() {
    if (answer1.getAttribute("data-answer") === questions[questionIndex].answer) {
        alert("correct")
        questionIndex++
        showQuestions()
    } else{
        alert("wrong")
        timerCount -= 10
}
});


answer2.addEventListener("click", function(){
    if (answer2.getAttribute("data-answer") === questions[questionIndex].answer){
        alert("correct")
        questionIndex++
        showQuestions()
    } else{
        alert("wrong")
        timerCount -= 10
}
});

answer3.addEventListener("click", function(){
    if (answer3.getAttribute("data-answer") === questions[questionIndex].answer){
        alert("correct")
        questionIndex++
        showQuestions()
    } else{
        alert("wrong")
        timerCount -= 10
}
});

answer4.addEventListener("click", function(){
    if (answer4.getAttribute("data-answer") === questions[questionIndex].answer){
        alert("correct")
        questionIndex++
        showQuestions()
    } else{
        alert("wrong")
        timerCount -= 10
}
});

// Timer
var TimerEl = document.querySelector("#Timer");
TimerEl.textContent = "Time: " + timerCount;

var timer;

function startTimer(){
    timer = window.setInterval(function(){
    timerCount--;
    TimerEl.textContent = "Time: " + timerCount

    if (timerCount === 0){
        clearInterval(timer)
    }
}, 1000 )}
// Event Listener to Start Quiz

document.getElementById("startButton").addEventListener("click", startGame)

//End of Game 


// function gameEnd(){
// document.getElementById("GameEnd").style.display = "none";
// }
// Event Listener to quiz answers
// var createDiv = document.createElement("div");
// document.body.setAttribute("id", createDiv)
