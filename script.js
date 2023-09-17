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

selectRock.addEventListener("click", () => {
    console.log(getPlayerChoice("rock"));
})
selectPaper.addEventListener("click", () => {
    console.log(getPlayerChoice("paper"));
})
selectScissors.addEventListener("click", () => {
    console.log(getPlayerChoice("scissors"));
})