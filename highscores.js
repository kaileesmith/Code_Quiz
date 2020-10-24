// GoBack btn
var goBack = document.querySelector("#goBack");
// Highscore VAR
var highScore = document.querySelector("#highScore");
// Clear btn
var clear = document.querySelector("#clear");
// Submit Btn
var submitB = document.querySelector("#submitbtn");



// goBack Event Listener
goBack.addEventListener("click", function() {
    window.location.replace("./index.html")

});

JSON.parse(localStorage.getItem(Score));
// $('p').text("user-score")

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
// }




// function storeIntials (){
//     intialsForm.addEventListener("submitB", function(event) {
//         event.preventDefault();

//         var intialsText = intialsInput.value.trim();

//         if (intialsText === "") {
//             return;
//         }
            


// };

//     storeIntials    ()
