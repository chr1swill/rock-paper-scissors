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

selectRock.addEventListener("click", () => {
    playRound(getRock(), getComputerChoice());
    declareWinner();
})
selectPaper.addEventListener("click", () => {
    playRound(getPaper(), getComputerChoice());
    declareWinner();
})
selectScissors.addEventListener("click", () => {
    playRound(getScissors(), getComputerChoice());
    declareWinner();
})














