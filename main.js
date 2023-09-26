import * as game from "./modules/gameLogic"
import * as dom from "./modules/dom"

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














