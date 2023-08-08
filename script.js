let userScore = 0;
let computerScore = 0;
const gameRounds = 5;
let attempts = 0;

// Get elements from the DOM
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const body = document.querySelector('body');

// Function to generate computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie !";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore += 1;
        return "You win!";
    } else {
        computerScore += 1;
        return "Computer wins!";
    }
}

// Event listeners for user choices
rockButton.addEventListener("click", playRound);

paperButton.addEventListener("click", playRound);

scissorsButton.addEventListener("click", playRound);

function updateScoreDisplay() {
    return scoreDisplay.textContent = `${userScore} - ${computerScore}`;
}

function playRound(event) {
    if (attempts < gameRounds) {
        const userChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        resultDisplay.textContent = `You chose ${userChoice} and the computer chose ${computerChoice}. ${result}`;
        resultDisplay.style.cssText = "text-transform: uppercase;"

        attempts += 1;
        updateScoreDisplay();

        if (attempts === gameRounds) {
            announceWinner();
        }
    }
}


function announceWinner() {
    let winner;
    if (userScore > computerScore) {
        winner = "You win!";
    } else if (userScore < computerScore) {
        winner = "Computer wins";
    } else {
        winner = "It's a tie";
    }

    resultDisplay.textContent = `Game over! ${winner}!`;

    const message = document.createElement('p');
    message.textContent = "Hit the refresh button or F5 to play again !";
    message.style.cssText = "text-transform: uppercase;";
    body.append(message);

}

updateScoreDisplay();