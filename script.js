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

function playRound(playerSelection, computerSelection) {
    let winner = checkWinner(playerSelection, computerSelection)
    let result = winner == "Player" ? "Congratulations! You won!"
        : winner == "Computer" ? "Sorry, the Computer won."
        : winner == "Tie" ? "Tie! Go again."
        : "Error: could not determine winner or tie";
    return result
    }

let playerCount = 0
let computerCount = 0
let numberOfRounds = 5
function playGame(playerCount, computerCount, numberOfRounds) {
    // Loop 5 times
    for (let round = 0; round < numberOfRounds; round++){
        let playerSelection = prompt("Lets play! Choose: Rock, Paper, or Scissors").toLowerCase()
        let computerSelection = getComputerChoice()
        let winner = checkWinner(playerSelection, computerSelection)
        if (winner == "Player") {
            playerCount += 1}  
        if (winner == "Computer") {
            computerCount += 1}
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)
        console.log(`Round Winner: ${winner}`)
        console.log(`Current Score: Player ${playerCount}, Computer: ${computerCount}`)
        console.log(`Rounds Completed: ${round + 1}`)
    }
    console.log('Game Over')
    console.log('Reload page to play again.')
}

// let playerSelection = prompt("Lets play! Choose: Rock, Paper, or Scissors")
// playerSelection = playerSelection.toLowerCase()
// let computerSelection = getComputerChoice()
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))
playGame(playerCount, computerCount, numberOfRounds)

