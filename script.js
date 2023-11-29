function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winner = "Tie"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Player"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Computer"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Computer"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Player"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Computer"
    }
    else {
        winner = "None"
    }

    return winner 
}

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3)
    let computerChoice = numberChoice == 0 ? "rock"
        : numberChoice == 1 ? "paper"
        : numberChoice == 2 ? "scissors"
        : "Error: bad choice";
    return computerChoice
}

function singleGame(playerSelection, computerSelection) {
    let winner = checkWinner(playerSelection, computerSelection)
    let result = winner == "Player" ? "Congratulations! You won!"
        : winner == "Computer" ? "Sorry, the Computer won."
        : winner == "Tie" ? "Tie! Go again."
        : "Error: could not determine winner or tie";
    return result
    }

function game(score) {
    let winner = checkWinner(playerSelection, computerSelection)
    if (winner == "Player") {
        playerCount += 1
    }  
    if (winner == "Computer") {
        computerCount += 1
    }
    gameCount += 1
}

let playerSelection = prompt("Lets play! Choose: Rock, Paper, or Scissors")
playerSelection = playerSelection.toLowerCase()
let computerSelection = getComputerChoice()
console.log(computerSelection)
console.log(singleGame(playerSelection, computerSelection))

