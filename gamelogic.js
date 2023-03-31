const rpsChoices = ["Rock", "Paper", "Scissors"];
/* let userInput = prompt("Choose your weapon!"); */

/* Generates the Computer's Decision from the array rpsChoices */
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}
/* Playing the game */
function game (){
    /* Getting Player Choice */
    const pChoice = this.getAttribute('id');
    /* Getting Computer Choice */
    const cChoice = getComputerChoice();
    console.log("Player: "+ pChoice +" Computer: " + cChoice)
    /* Playing RPS by comparing player and computer choice */
    if (pChoice === cChoice) {
        return console.log("Draw! Select another weapon now!");      
    } else if ((pChoice === "Rock" && cChoice === "Scissors") 
                || (pChoice === "Scissors" && cChoice === "Paper") 
                || (pChoice === "Paper" && cChoice === "Rock" )) {
        return console.log("You win warrior! A job well done.");
    } else {
        return console.log("You have been defeated... Pick yourself up warrior -- fight another day.");
    }
}
/* Add event listeners to the buttons */
const buttons = document.querySelectorAll('.rpsButton');
buttons.forEach(button => button.addEventListener("click", game))


/* Need to button => get id as player choice => pass choice to function game => 
    generate computer choice => compare and generate win/loss/tie => output 
    win/loss to player => mark the w/l tracker
*/