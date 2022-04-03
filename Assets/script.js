// var timeElement = document.querySelector("#start").addEventListener("click", function() {

// // var mainElement = document.getElementById(".countdown");

// var timeLeft= 30;

    
// // Set interval to count down every 1000 milliseconds.
// var timeInterval = setInterval(function function1(){ 
//     document.querySelector(".countdown").innerHTML= timeLeft + " " + "seconds remaining";
//     timeLeft--;
//     timeElement.textContent = timeLeft + " seconds remaining";

//     timeLeft -=1;
//     if (timeLeft <= 0) {
//         clearInterval(timeInterval);
//         document.querySelector(".countdown").innerHTML = "Game over"
//     }
// }, 1000);

// });

    // if (timeLeft> 1) {
    //     mainElement.textContent = timeLeft + " seconds remaining";
    //     timeLeft--;
    // } else if (timeLeft ===1) {
    //         timeElement.textContent = timeLeft + " second remaining";
    //         timeLeft--;
    // } else {
    //     timeElement.textContent = "Game over ";
    //     clearInterval(timeInterval);
    






var questionInput = document.querySelector(".Question");
var  AnswerOptionsInput = document.querySelector(".Answer-options");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var startButton= document.getElementById("start");
var timeElement= document.querySelector(".countdown");

var question= " ";
var correctAnswer= " ";
var winCount= 0;
var loseCount= 0;
var isWin = false;
var timeLeft;
var countdown;

// Arrays used for the questions and answers.
var askQuestions= [];
var answer= [];

// Array of questions and possible answers.
const questions =[
    {askQuestions: "Where do boats go if they think they are sick?",
    answer: ["To the sea!", "To a mechanic!", "To a dock!", "To the gas station!"], correctAnswer: "To a dock!"},
    {askQuestions: "Who ever invented the knock-knock joke...",
    answer: ["is not very smart.", "is the smartest person in the world.", "is a-door-able."], correctAnswer: "should get a no-bel prize"},
    {askQuestions: "What do you call an alligator in a vest?",
    answer: ["an in-vest-igator", "a goose.", "lunch for other alligators.", "an in-vest-ment"], correctAnswer: "an in-vest-igator"},
    {askQuestions: "Two peanuts walk into a bar...",
    answer: [ "they were eaten.", "they were crushed.", "one was a-salted", "the bar was called nuts"], correctAnswer:"one was a-salted"},
    ]

    let askQuestionsObj= questions.splice(Math.floor(Math.random() * questions.length), 1);

    console.log(askQuestionsObj.answer);


function init(){
    getWins();
    getlosses();
}

// Start game when start button is pushed.  
function startGame() {
    isWin=false;
    timeLeft=30;
    // Start button will not be able to be pushed until game is finished.
    startButton.disabled = true;

    renderQuestions ()
    startTimer()
}

// Win the game when questions answered correctly.
function winGame() {
correctAnswer.textContent = "Correct!";
winCounter++
startButton.disabled = false;
setWins()
}

// When answered incorrectly the loseGame function is called.
function loseGame() {
correctAnswer.textContent= "Game over";
loseCounter ++
startButton.disabled = false;
setLosses()
}

function startTimer() {
// Start Timer
timeLeft= setInterval (function(){
    countdown--;
    timeLeftElement.textContent = countdown;
    if (countdown >= 0){
        // If answered correctly
        if (isWin && countdown > 0){
            // stops the timer
            clearInterval(timeLeft);
            winGame();
        }
    }
    // If time runs out before answered correctly.
    if (countdown ===0) {
        clearInterval(timeLeft);
        loseGame();
    }
}, 1000);
}

function renderQuestions(){
    // Randomly pick questions from the const questions

}
// let askQuestions = [
//     {
//         question: "Where do boats go if they think they are sick?",
//         answer: [
//             {optionA: "To the sea!", answer:false},
//             {optionB: "To a mechanic!", answer:false},
//             {optionC: "To a dock!", answer:true},
//             {optionD: "To the gas station!", answer:true}
//         ]
//     },
//     {
//         question: "Who ever invented the knock-knock joke...",
//         answer: [
//             {optionA: "is not very smart.", answer:false},
//             {optionB: "is the smartest person in the world.", answer:false},
//             {optionC: "is a-door-able.", answer:false},
//             {optionD: "should get a no-bel prize", answer:true},
//         ]
//     },
//     {
//         question: "What do you call an alligator in a vest?",
//         answer: [
//             {optionA: "an in-vest-igator", answer: true},
//             {optionB: "a goose.", answer: false},
//             {optionC: "lunch for other alligators.", answer:false},
//             {optionD: "an in-vest-ment", answer:false},
//         ]
//     },
//     {
//         question: "Two peanuts walk into a bar...",
//         answer: [
//             {optionA: "they were eaten.", answer:false},
//             {optionB: "they were crushed.", answer:false},
//             {optionC: "one was a-salted", answer:true},
//             {optoinC: "the bar was called nuts", answer:false}
//         ]
//     },
   
//         ]
//     }
// ]





