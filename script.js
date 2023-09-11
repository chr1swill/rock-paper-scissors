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
