const output = document.getElementById("Output");
const rpsChoices = ["Rock", "Paper", "Scissors"];
/* let userInput = prompt("Choose your weapon!"); */

/* Generates the Computer's Decision from the array rpsChoices */
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}

function updateTracker (){
    const trackers = document.querySelectorAll(".tracker > div");
    for (tracker of trackers){
        if (tracker.getAttribute('class') != 'gamePlayed'){
            tracker.classList.add("gamePlayed");
            break
        } else {
            continue
        }
    }
    console.log(trackers);
}
/* Playing the game */
function game (){
    output.textContent =  "";
    /* Getting Player Choice */
    const pChoice = this.getAttribute('id');
    /* Getting Computer Choice */
    const cChoice = getComputerChoice();
    console.log("Player: "+ pChoice +" Computer: " + cChoice)
    /* Playing RPS by comparing player and computer choice */
    if (pChoice === cChoice) {
        updateTracker();  
        return output.textContent = "Draw! Select another weapon now!"; 
    } else if ((pChoice === "Rock" && cChoice === "Scissors") 
                || (pChoice === "Scissors" && cChoice === "Paper") 
                || (pChoice === "Paper" && cChoice === "Rock" )) {
        updateTracker();
        return output.textContent = "You win warrior! A job well done.";
    } else {
        updateTracker();
        return output.textContent = "You have been defeated... Pick yourself up warrior -- fight another day.";
    }
}
/* Add event listeners to the buttons */
const buttons = document.querySelectorAll('.rpsButton');
buttons.forEach(button => button.addEventListener("click", game));




/*  How to make a W/L tracker:
    ???
    Profit

    Get blank checkbox images
    add green check on win
    add red x on loss
    at 5 games, output the win or loss message
    make a play again button 
*/