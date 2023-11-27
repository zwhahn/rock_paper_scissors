function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winner = "Player"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        winner = "Computer"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winner = "Player"
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        winner = "Computer"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winner = "Player"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        winner = "Computer"
    }
    else {
        winner = "Error: could not determine winner"
    }

    return winner 
}

function getComputerChoice() {
    numberChoice = Math.floor(Math.random() * 3)
    let computerChoice = numberChoice == 0 ? "Rock"
        : numberChoice == 1 ? "Paper"
        : numberChoice == 2 ? "Scissors"
        : "Error: bad choice";
    return computerChoice
}

function singleGame(playerSelection, computerSelection) {
    

}

console.log(getComputerChoice())