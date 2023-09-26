// display text saying to select input 
export const displayText = document.getElementById("displayToPlayer");

// get player selected input rock paper scissors
export const selectRock = document.getElementById("selectRock");
export const selectPaper = document.getElementById("selectPaper");
export const selectScissors = document.getElementById("selectScissors");
export const scoreBoard = document.getElementById("scoreBoard");

export const resetTextFields = () => {
    displayText.innerText = "";
    scoreBoard.innerText = "";
}