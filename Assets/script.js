
var questionInput = document.querySelector(".Question");
var  AnswerOptionsInput = document.querySelector(".Answer-options");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var startButton= document.getElementById("start");
var timeElement= document.querySelector(".countdown");
var options=document.querySelector("#options");
console.log(options);

var question= " ";
var correctAnswer= " ";
var winCount= 0;
var loseCount= 0;
var isWin = false;
var timeLeft=30;
var countdown;

// Arrays used for the questions and answers.
var questionIndex=0;
var askQuestions= [];
var answer= [];


startButton.onclick= startGame;

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
    {askQuestions: "I used to be a banker...",
    answer: [
     "then I lost all my money.", "then I was robbed.", "and then I lost interest.",],
    correctAnswer: "and then I lost interest."
    },
    {
    askQuestions: "I was addicted to the hokey-pokey...",
    answer: [ "but then I turned myself around.", "but then I went to Hokey Anonymous.", "but then I put my right foot in.",
    ],
        correctAnswer: "but then I turned myself around."
    },
    {
    askQuestions: "I tried to come up with a carpentry pun...",
    answer: [ "I nailed it.", "but I could not hit it on the head.", "that wood-work.",
    ],
        correctAnswer: "that wood-work."
    },
    {
    askQuestions: "I think I nailed it but...",
    answer: ["I missed it on the head.","nobody saw it.", "I was wrong.",
    ],
    correctAnswer: "nobody saw it."
    },
    {askQuestions: "If you keep holding your pee..",
    answer: ["you might pee your pants",
    "tinkle, tinkle little star.",
     "urine trouble.",
    ],
    correctAnswer: "urine trouble."
    },
    {askQuestions: "What do you call a grumpy cow?",
    answer: ["moo-dy!", "ground meat!", "moo-thy!",], 
    correctAnswer: "moo-dy!",
    },
    ]

    
// Initiate wins and losses
function init(){
    getWins();
    getlosses();
}

// Start game when start button is pushed.  
function startGame() {

    // Start button will not be able to be pushed until game is finished.
    // startButton.disabled = true;

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
correctAnswer.textContent= "Incorrect";
loseCounter ++
startButton.disabled = false;
setLosses()
}

function startTimer() {
// Start Timer
countdown= setInterval (function(){
    console.log(timeLeft)
    timeLeft--;
    timeElement.textContent = timeLeft + "seconds remaining";
    if (timeLeft <= 0){
        
      else ;
      if {setLosses(countdown = -5)
        };
    }
    // If time runs out before answered correctly.
    if (timeLeft === 0) {
        clearInterval(timeLeft);
       
    }
}, 1000);
};
// if (timeLeft> 1) {
//         timeElement.textContent = timeLeft + " seconds remaining";
//         timeLeft--;
//     } else if (timeLeft ===1) {
//             countdown.textContent = timeLeft + " second remaining";
            
//     } else {
//         timeLeft=0;
//         timeElement.textContent = "Game over ";
//         clearInterval(timeInterval);
//     }

// Start the Game
function renderQuestions(){
    // Randomly pick questions from the const questions
    
    let currentQuestion= questions[questionIndex]
    questionInput.textContent=currentQuestion.askQuestions;
    currentQuestion.answer.forEach(function(choice,i){
        var answerButton=document.createElement("button")
        answerButton.setAttribute("value", choice)
        answerButton.textContent= i + 1 + ". " + choice
        options.appendChild(answerButton)
    })
   

    // Loop to assort the correct answer within the answers.
    for (var i=0; i <correctAnswer; i++){
        answers.push(" ");
    }
    // questionInput.textContent=question.innerHTML("");
    // AnswerOptionsInput.textContent= answers.innerHTML("");
    
function checkAnswers (correctAnswer) {
    userAnswer = (answer.querySelector('input[name=correctAnswer'+ i +']:checked')||{}).value;

    if(userAnswer===answer[i].correctAnswer){

        isWin++;

        correctAnswer[i].style.color = "blue";
    }
        else{
            answer[i].style.color="red";
            setLosses ++;
        }

    }

}

function setWins(){
    win.textContent=winsCounter;
    localStorage.setItem("winCount", winsCounter);
}

function setLosses(){
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter)
}

function getWins(){
    var storedWins=localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;}
        else {
            winCounter = storedWins;
        }
    }

function getlosses () {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter= storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkWin() {
    if (question === answers.join("")); {
        isWin=true;
    }
};

function checkAnswers (correctAnswer) {

}
// console.log(askQuestions)
// console.log(askQuestionsObj.answer);