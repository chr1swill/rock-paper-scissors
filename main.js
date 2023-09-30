import * as game from "./modules/gameLogic.js"

selectRock.addEventListener("click", () => {
    game.playRound(game.getRock(), game.getComputerChoice());
    game.declareWinner();
})
selectPaper.addEventListener("click", () => {
    game.playRound(game.getPaper(), game.getComputerChoice());
    game.declareWinner();
})
selectScissors.addEventListener("click", () => {
    game.playRound(game.getScissors(), game.getComputerChoice());
    game.declareWinner();
})


