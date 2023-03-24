const rpsChoices = ["Rock", "Paper", "Scissors"]


function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * rpsChoices.length)
    return rpsChoices[computerChoice];
}

console.log(getComputerChoice());