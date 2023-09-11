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
