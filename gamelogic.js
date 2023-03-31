const rpsChoices = ["Rock", "Paper", "Scissors"];
/* let userInput = prompt("Choose your weapon!"); */

/* Generates the Computer's Decision from the array rpsChoices */
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}

/* Takes userInput and normalizes it for the game */
function playerChoice () {
    const getId = this.getAttribute("id")
    console.log(getId);
}

function game (getComputerChoice, playerChoice){
/* Compare player and comp inputs */
    console.log(getComputerChoice, playerChoice);
    if (playerChoice === getComputerChoice) {
        return console.log("Draw! Select another weapon now!");      
    } else if ((playerChoice === "Rock" && getComputerChoice === "Scissors") 
                || (playerChoice === "Scissors" && getComputerChoice === "Paper") 
                || (playerChoice === "Paper" && getComputerChoice === "Rock" )) {
        return console.log("You win warrior! A job well done.");
    } else {
        return console.log("You have been defeated... Pick yourself up warrior -- fight another day.");
    }
}
/* Add event listeners to the buttons */
const buttons = document.querySelectorAll('.rpsButton');

buttons.forEach(button => button.addEventListener("click", playerChoice))
/* Run the Game! */
/* game(getComputerChoice(), playerChoice()); */


/* Need to button => get id as player choice => pass choice to function game => 
    generate computer choice => compare and generate win/loss/tie => output 
    win/loss to player => mark the w/l tracker
*/