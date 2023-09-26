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

export const getRock = () => {
    return "rock";
}
export const getPaper = () => {
    return "paper";
}
export const getScissors = () => {
    return "scissors";
}


// generate the cpu selection
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getComputerChoice = () => {
    const choices = [getRock(), getPaper(), getScissors()];
    return choices[getRandomNumber(0, 2)];
}


// compare the player selection and the cpu choice
export const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        displayText.innerText = "It's a tie!";
    } else if (playerChoice === getRock()) {
        if (computerChoice === getScissors()) {
            displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointCpu();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    } else if (playerChoice === getPaper()) {
        if (computerChoice === getRock()) {
            displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointCpu();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    } else if (playerChoice === getScissors()) {
        if (computerChoice === getPaper()) {
            displayText.innerText = "You win!";
            SCORE_KEEPER.addPointPlayer();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        } else {
            displayText.innerText = "You lose!";
            SCORE_KEEPER.addPointPlayer();
            scoreBoard.innerText = SCORE_KEEPER.getScore();
        }
    }
}

export const declareWinner = () => {
    if (SCORE_KEEPER.cpuScore < 5 && SCORE_KEEPER.playerScore < 5) {
        return;
    } else if (SCORE_KEEPER.cpuScore == 5) {
        displayText.innerText = "Game Over! CPU is the Winner.";
        SCORE_KEEPER.resetScore();
        setTimeout(resetTextFields, 3000)
    } else if (SCORE_KEEPER.playerScore == 5) {
        displayText.innerText = "Game Over! Player is the Winner.";
        SCORE_KEEPER.resetScore();
        setTimeout(resetTextFields, 3000)
    }
}