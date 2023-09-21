const getRock = () => {
    return "rock";
}
const getPaper = () => {
    return "paper";
}
const getScissors = () => {
    return "scissors";
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getComputerChoice = () => {
    const choices = [getRock(), getPaper(), getScissors()];
    return choices[getRandomNumber(0, 2)];
}

const getPlayerChoice = (choice) => {
    if (typeof choice !== 'string') {
        console.log("Please enter a string: ", choice);
    } else {
        const lowerCaseChoice = choice.toLowerCase();
        if (lowerCaseChoice !== 'rock' && lowerCaseChoice !== 'paper' && lowerCaseChoice !== 'scissors') {
            console.log("Please enter a valid choice: ", lowerCaseChoice);
        } else if (lowerCaseChoice === "rock") {
            return getRock();
        } else if (lowerCaseChoice === "paper") {
            return getPaper();
        } else if (lowerCaseChoice === "scissors") {
            return getScissors();
        }
    }
}

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

const selectRock = document.getElementById("selectRock");
const selectPaper = document.getElementById("selectPaper");
const selectScissors = document.getElementById("selectScissors");
const playerResult = document.getElementById("playerResult")
const scoreBoard = document.getElementById("scoreBoard");

selectRock.addEventListener("click", () => {
    playerResult.innerText = `You choice ${getRock()}`;
})
selectPaper.addEventListener("click", () => {
    playerResult.innerText = `You choice ${getPaper()}`;
})
selectScissors.addEventListener("click", () => {
    playerResult.innerText = `You choice ${getScissors()}`
})

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
// get player selected input rock paper scissors
// generate the cpu selection
// display the winner
// add point to the winner of the round
// check if either play has hit 5 yet 
// if not loop back to step one 
// if play has 5 - display them as the winner of the game 
// reset the score 
// go back to step one 