let playerInput = "";
let cpuOptions = ["rock", "paper", "scissors"];
let cpuScore = 0;
let playerScore = 0;
let cpuInput; // Declare cpuInput outside the event listener functions

function inputComparison() {
    if (playerInput == cpuInput) {
        console.log("It's a tie!");
    } else if (playerInput == 0 && cpuInput == 1 || playerInput == 1 && cpuInput == 2 || playerInput == 2 && cpuInput == 0) {
        cpuScore ++;
        console.log("CPU WINS!",cpuScore);
        
    } else {
        playerScore ++;
        console.log("YOU WIN!",playerScore);
        
    }
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function scoreCalculation (){
    if (cpuScore == 3){
        const winner = document.querySelector("#winner");
        winner.innerHTML = "CPU GANA !";
        cpuScore = 0;
        playerScore = 0;
    } else if (playerScore == 3){
        const winner = document.querySelector("#winner");
        winner.innerHTML = "TU GANAS !";
        cpuScore = 0;
        playerScore = 0;
    }
}



    function scoreCounter() {
        const scorePlayer = document.querySelector("#scorePlayer");
        scorePlayer.innerHTML = playerScore; 

        const scoreCPU = document.querySelector("#scoreCPU");
        scoreCPU.innerHTML = cpuScore;

        
    }


const btnrock = document.querySelector("#rock");
btnrock.addEventListener("click", () => {
    playerInput = 0;
    cpuInput = getRandomIndex(cpuOptions.length); // Assign cpuInput here
    inputComparison();
    scoreCalculation();
    scoreCounter()
});

const btnpaper = document.querySelector("#paper");
btnpaper.addEventListener("click", () => {
    playerInput = 1;
    cpuInput = getRandomIndex(cpuOptions.length); // Assign cpuInput here
    inputComparison();
    scoreCalculation();
    scoreCounter()
});

const btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener("click", () => {
    playerInput = 2;
    cpuInput = getRandomIndex(cpuOptions.length); // Assign cpuInput here
    inputComparison();
    scoreCalculation();
    scoreCounter();
});


