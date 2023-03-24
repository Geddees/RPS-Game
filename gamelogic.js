const rpsChoices = ["Rock", "Paper", "Scissors"];
/* let userInput = prompt("Choose your weapon!"); */

/* Generates the Computer's Decision from the array rpsChoices */
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}

/* Takes userInput and normalizes it for the game */
function playerChoice (userInput) {
    userInput = prompt("Choose your weapon!");
    let beginningInput = userInput.slice(0,1).toUpperCase();
    let endingInput = userInput.slice(1).toLowerCase();
    let pchoice = (beginningInput + endingInput).toString();
    /* Check if userInput is valid */
    if (pchoice !== "Rock" && pchoice !== "Paper" && pchoice !== "Scissors"){
        return alert("Not a valid weapon warrior!");
    } else {
        return pchoice;
    }
}

function game (getComputerChoice, playerChoice){
/* Compare player and comp inputs */
    console.log(getComputerChoice, playerChoice);
    if (playerChoice == undefined || playerChoice == null){
        return
    } else if (playerChoice === getComputerChoice) {
        return console.log("Draw! Select another weapon now!");      
    } else if ((playerChoice === "Rock" && getComputerChoice === "Scissors") 
                || (playerChoice === "Scissors" && getComputerChoice === "Paper") 
                || (playerChoice === "Paper" && getComputerChoice === "Rock" )) {
        return console.log("You win warrior! A job well done.");
    } else {
        return console.log("You have been defeated... Pick yourself up warrior -- fight another day.");
    }
}
/* Run the Game! */
game(getComputerChoice(), playerChoice());
