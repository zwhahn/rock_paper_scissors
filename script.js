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

var playerCount = 0;
var computerCount = 0;
let round = 0;
const MAX_ROUND = 5;

function playGame(playerSelection, round, MAX_ROUND) {
    let computerSelection = getComputerChoice()
    let winner = checkWinner(playerSelection, computerSelection)
    if (winner == "Player") {
        playerCount++}  
    if (winner == "Computer") {
        computerCount++}
    roundWinner.textContent = `Round ${round} Winner: ${winner}`
    playerScore.textContent = `Player: ${playerCount}`;
    cpuScore.textContent = `Computer: ${computerCount}`;
    if (round === MAX_ROUND){
        round = 0;
        if (playerCount > computerCount){
            result.textContent = `Winner: Player`;
        }
        else if (computerCount > playerCount){
            result.textContent = `Winner: CPU`;
        }
        else if (playerCount === computerCount){
            result.textContent = `Tie!`;
        }
        else {
            result.textContent = `ERROR: No result`;
        }
        }
    return round
    }


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        if (round === 0){
            playerCount = 0;
            computerCount = 0;
        }
        round++
        round = playGame(playerSelection, round, MAX_ROUND);
    })
})

const result = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const roundWinner = document.querySelector(".round-winner");
