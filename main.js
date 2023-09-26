import * as game from "./modules/gameLogic"

// display text saying to select input 
const displayText = document.getElementById("displayToPlayer");

// get player selected input rock paper scissors
const selectRock = document.getElementById("selectRock");
const selectPaper = document.getElementById("selectPaper");
const selectScissors = document.getElementById("selectScissors");
const scoreBoard = document.getElementById("scoreBoard");

const resetTextFields = () => {
    displayText.innerText = "";
    scoreBoard.innerText = "";
}

const playGame = (playerOption) => {
    let playerChoice = playerOption;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    declareWinner();
}

selectRock.addEventListener("click", () => {
    playGame(getRock());
})
selectPaper.addEventListener("click", () => {
    playGame(getPaper());
})
selectScissors.addEventListener("click", () => {
    playGame(getScissors());
})














