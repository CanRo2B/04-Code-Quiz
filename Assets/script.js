var timeElement = document.querySelector("#start").addEventListener("click", function() {

// var mainElement = document.getElementById(".countdown");

var timeLeft= 30;

    
// Set interval to count down every 1000 milliseconds.
var timeInterval = setInterval(function function1(){ 
    document.querySelector(".countdown").innerHTML= timeLeft + " " + "seconds remaining";
    timeLeft--;
    timeElement.textContent = timeLeft + " seconds remaining";

    timeLeft -=1;
    if (timeLeft <= 0) {
        clearInterval(timeInterval);
        document.querySelector(".countdown").innerHTML = "Game over"
    }
}, 1000);

});

    // if (timeLeft> 1) {
    //     mainElement.textContent = timeLeft + " seconds remaining";
    //     timeLeft--;
    // } else if (timeLeft ===1) {
    //         timeElement.textContent = timeLeft + " second remaining";
    //         timeLeft--;
    // } else {
    //     timeElement.textContent = "Game over ";
    //     clearInterval(timeInterval);
    






var questionInput = document.querySelector("#Question");
var  AnswerOptionsInput = document.querySelector("Answer-options");

let askQuestions = [
    {
        question: "Where do boats go if they think they are sick?",
        answers: [
            {optionA: "To the sea!", answer:false},
            {optionB: "To a mechanic!", answer:false},
            {optionC: "To a dock!", answer:true},
            {optionD: "To the gas station!", answer:true}
        ]
    },
    {
        question: "Who ever invented the knock-knock joke...",
        answers: [
            {optionA: "is not very smart."},
            {optionB: "is the smartest person in the world."},
            {optionC: "is a-door-able."},
            {optionD: "should get a no-bel prize"},
        ]
    },
    {
        question: "What do you call an alligator in a vest?",
        answer: [
            {optionA: "an in-vest-igator"},
            {optionB: "a goose."},
            {}
        ]

    }
        ]
    }
]





