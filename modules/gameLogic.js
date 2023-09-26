import * as dom from "./dom"

export let SCORE_KEEPER = {
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

export const getRock = () => "rock";
export const getPaper = () => "paper";
export const getScissors = () => "scissors";

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export const getComputerChoice = () => {
    const choices = [getRock(), getPaper(), getScissors()];
    return choices[getRandomNumber(0, 2)];
}

export const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        dom.displayText.innerText = "It's a tie!";
    } else if (playerChoice === getRock()) {
        if (computerChoice === getScissors()) {
            dom.displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            dom.displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointCpu();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    } else if (playerChoice === getPaper()) {
        if (computerChoice === getRock()) {
            dom.displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            dom.displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointCpu();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    } else if (playerChoice === getScissors()) {
        if (computerChoice === getPaper()) {
            dom.displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            dom.displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointPlayer();
            dom.scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    }
}

export const declareWinner = () => {
    if (SCORE_KEEPER.cpuScore < 5 && SCORE_KEEPER.playerScore < 5) {
        return;
    } else if (SCORE_KEEPER.cpuScore == 5) {
        dom.displayText.innerText = "Game Over! CPU is the Winner.";
        SCORE_KEEPER.resetScore();
        setTimeout(dom.resetTextFields, 3000)
    } else if (SCORE_KEEPER.playerScore == 5) {
        dom.displayText.innerText = "Game Over! Player is the Winner.";
        SCORE_KEEPER.resetScore();
        setTimeout(dom.resetTextFields, 3000)
    }
}