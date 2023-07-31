function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let playerOption = prompt("Choose: 'rock', 'paper', 'scissors' ").toLowerCase();
    return playerOption;
}

function playRound(playerSelection, computerSelection) {
    // GAME LOGIC
    if (playerSelection === computerSelection) {
        console.log("It's a Tie! ");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win! The computer chose ${computerSelection} and you chose ${playerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win! The computer chose ${computerSelection} and you chose ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        console.log(`You win! The computer chose ${computerSelection} and you chose ${playerSelection}`);
    } else {
        console.log(`You lose! The computer chose ${computerSelection} and you chose ${playerSelection}`);
    }
}

function game() {
    let attempts = 0;
    let rounds = 5;
    for (let i = 0; i < rounds; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        attempts += 1;
    }
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(game());
