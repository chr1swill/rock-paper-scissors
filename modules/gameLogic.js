export let scoreKeeper = {
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
            scoreKeeper.addPointCpu();
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

export const declareWinner = () => {
    if (scoreKeeper.cpuScore < 5 && scoreKeeper.playerScore < 5) {
        return;
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