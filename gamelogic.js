const output = document.getElementById("Output");
const rpsChoices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("#scoreboard > button");
const trackers = document.querySelectorAll(".tracker > div");


/* let userInput = prompt("Choose your weapon!"); */

/* Generates the Computer's Decision from the array rpsChoices */
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}

function updateTracker (className){
    for (tracker of trackers){
        if (tracker.getAttribute('class') === "ready"){
            tracker.classList.add(className);
            break
        } else {
            continue
        }
    }
}
/* Win/Loss Tracker */
let pScore = 0;
let cScore = 0;

function gamesPlayedTracker (game){
    (game === "gameWin") ? pScore++ : cScore++;
    console.log("Player Score: "+pScore)
    console.log("Computer Score: "+cScore)
    if (pScore !== 3 && cScore !== 3){
        return
    } else if (pScore === 3) {
        pScore = 0;
        cScore = 0;
        output.textContent = "You win warrior! A job well done.";
        /* Spawns the Play Again Button, and removes the RPS buttons */
        buttons.forEach(button => button.classList.toggle("hidden"));
        return 
    } else {
        pScore = 0;
        cScore = 0;
        output.textContent = "You have been defeated...\n Pick yourself up warrior -- fight another day."
        /* Spawns the Play Again Button, and removes the RPS buttons */
        buttons.forEach(button => button.classList.toggle("hidden"));
        return
    }
}

function resetGame (){
    output.textContent = ""
    buttons.forEach(button => button.classList.toggle("hidden"));
    trackers.forEach(tracker => tracker.classList.remove("gameWin", "gameLoss"))
}

/* Playing the game */
function game (){
    output.textContent = "";
    /* Getting Player Choice */
    const pChoice = this.getAttribute('id');
    /* Getting Computer Choice */
    const cChoice = getComputerChoice();
    console.log("Player: "+ pChoice +" Computer: " + cChoice)
    /* Playing RPS by comparing player and computer choice */
    if (pChoice === cChoice) {
        return output.textContent = "Draw! Select another weapon now!"; 
    } else if ((pChoice === "Rock" && cChoice === "Scissors") 
                || (pChoice === "Scissors" && cChoice === "Paper") 
                || (pChoice === "Paper" && cChoice === "Rock" )) {
        updateTracker("gameWin");
        gamesPlayedTracker("gameWin");
        return;
    } else {
        updateTracker("gameLoss");
        gamesPlayedTracker("gameLoss");
        return;
    }
}
/* Add event listeners to the buttons */
const rpsButtons = document.querySelectorAll('.rpsButton');
rpsButtons.forEach(button => button.addEventListener("click", game));

const playAgainButton = document.querySelector(".anotherGame");
playAgainButton.addEventListener("click", resetGame)

function track () {
    trackers.forEach(tracker => console.log(tracker))
}
/*  How to make a play again button:
    ???
    When either player hits 3, spawn a "Play again" button
    Should remove the RPS buttons if I can...
    Need to reset: 
     player and comp scores
     all the checkboxes
     remove the win/loss message
*/