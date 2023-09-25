const getRock = () => {
    return "rock";
}
const getPaper = () => {
    return "paper";
}
const getScissors = () => {
    return "scissors";
}

let scoreKeeper = {
    playerScore: 0,
    cpuScore: 0,
    resetScore() {
        this.playerScore = 0;
        this.cpuScore = 0;
    },
    getScore() {
        return `${playerScore} - ${cpuScore}`
    },
    addPointPlayer() {
        this.playerScore + 1;
    },
    addPointCpu() {
        this.cpuScore + 1;
    }
}
// display text saying to select input 
const displayText = document.getElementById("displayToPlayer");
const setDisplayText = (text) => userText.innerText(text);

// get player selected input rock paper scissors
const selectRock = document.getElementById("selectRock");
const selectPaper = document.getElementById("selectPaper");
const selectScissors = document.getElementById("selectScissors");
const playerResult = document.getElementById("playerResult")
const scoreBoard = document.getElementById("scoreBoard");

// generate the cpu selection
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getComputerChoice = () => {
    const choices = [getRock(), getPaper(), getScissors()];
    return choices[getRandomNumber(0, 2)];
}

// comppare the player selection and the cpu choice
const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (playerChoice === getRock()) {
        if (computerChoice === getScissors()) {
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if (playerChoice === getPaper()) {
        if (computerChoice === getRock()) {
            return "You win!";
        } else {
            return "You lose!";
        }
    } else if (playerChoice === getScissors()) {
        if (computerChoice === getPaper()) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
}

// display the winner
// add point to the winner of the round
// check if either play has hit 5 yet 
// if not loop back to step one 
// if play has 5 - display them as the winner of the game 
// reset the score 
// go back to step one 

const mainLogic = (playerOption) => {
    let playerChoice = playerOption;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

selectRock.addEventListener("click", () => {
    mainLogic(getRock());
})
selectPaper.addEventListener("click", () => {
   mainLogic(getRock());
})
selectScissors.addEventListener("click", () => {
   mainLogic(getRock());
})














