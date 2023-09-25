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
        return `${this.playerScore} - ${this.cpuScore}`
    },
    addPointPlayer() {
        this.playerScore += 1;
    },
    addPointCpu() {
        this.cpuScore += 1;
    }
}
// display text saying to select input 
const displayText = document.getElementById("displayToPlayer");

// get player selected input rock paper scissors
const selectRock = document.getElementById("selectRock");
const selectPaper = document.getElementById("selectPaper");
const selectScissors = document.getElementById("selectScissors");
const scoreBoard = document.getElementById("scoreBoard");

// generate the cpu selection
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getComputerChoice = () => {
    const choices = [getRock(), getPaper(), getScissors()];
    return choices[getRandomNumber(0, 2)];
}

// compare the player selection and the cpu choice
const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        displayText.innerText = "It's a tie!";
    } else if (playerChoice === getRock()) {
        if (computerChoice === getScissors()) {
            displayText.innerText = "You win!";
            scoreKeeper.addPointPlayer();
            scoreBoard.innerText = scoreKeeper.getScore();
        } else {
            displayText.innerText = "You lose!";
            scoreKeeper.addPointCpu();
            scoreBoard.innerText = scoreKeeper.getScore();
        }
    } else if (playerChoice === getPaper()) {
        if (computerChoice === getRock()) {
            displayText.innerText = "You win!";
            scoreKeeper.addPointPlayer();
            scoreBoard.innerText = scoreKeeper.getScore();
        } else {
            displayText.innerText = "You lose!";
            scoreKeeKeper.addPointCpu();
            scoreBoard.innerText = scoreKeeper.getScore();
        }
    } else if (playerChoice === getScissors()) {
        if (computerChoice === getPaper()) {
            displayText.innerText = "You win!";
            scoreKeeper.addPointPlayer();
            scoreBoard.innerText = scoreKeeper.getScore();
        } else {
            displayText.innerText = "You lose!";
            scoreKeeper.addPointPlayer();
            scoreBoard.innerText = scoreKeeper.getScore();
        }
    }
}

// display the winner
// add point to the winner of the round
// check if either play has hit 5 yet 
const resetTextFields = () => {
    displayText.innerText = "";
    scoreBoard.innerText = "";
}
const declareWinner =  () => {
    if (scoreKeeper.cpuScore < 5 && scoreKeeper.playerScore < 5) {
    return ;
    } else if (scoreKeeper.cpuScore == 5) {
    displayText.innerText = "Game Over! CPU is the Winner.";
    scoreKeeper.resetScore();
    setTimeout(resetTextFields, 3000)
    } else if (scoreKeeper.playerScore == 5) {
    displayText.innerText = "Game Over! Player is the Winner.";
    scoreKeeper.resetScore();
    setTimeout(resetTextFields, 3000)
    }
}
// if not loop back to step one 
// if play has 5 - display them as the winner of the game 
// reset the score 
// go back to step one 

const mainLogic = (playerOption) => {
    let playerChoice = playerOption;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    declareWinner();
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














