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
    
    if (pchoice !== "Rock" && pchoice !== "Paper" && pchoice !== "Scissors"){
        return alert("Not a valid weapon warrior!");
    } else {
        return pchoice;
    }
}

/* function validateInput (playerChoice) {
    console.log(typeof playerChoice); // String
    if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors"){
        return alert("Not a valid weapon warrior!");
    } else {
        return console.log(playerChoice);
    }
/* }
/* Check if userInput is a valid choice */
console.log(getComputerChoice())
console.log(playerChoice())