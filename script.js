function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3)) + 1;
    
    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else if (randomNum === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What is your choice? Enter 'rock', 'paper', or 'scissors'.");
}

function playRound(humanChoice, computerChoice) {
    formattedHumanChoice = humanChoice.toLowerCase();

    if (formattedHumanChoice === computerChoice) {
        console.log("It's a tie.");
    }
    else if (formattedHumanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("Paper beats rock! You lose!");
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            console.log("Rock beats scissors! You win!");
        }
    }
    else if (formattedHumanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("Paper beats rock! You win!");
        }
        else if (computerChoice === "scissors") {
            computerScore++;
            console.log("Scissors beats paper! You lose!");
        }
    }
    else if (formattedHumanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("Rock beats scissors! You lose!");
        }
        else if (computerChoice === "paper") {
            humanScore++;
            console.log("Scissors beats paper! You win!");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        playRound(humanSelection, computerSelection);
    }

    console.log("After 5 games, the score is...");
    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Player wins!");
    } 
    else if (humanScore < computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }
}

let computerScore = 0;
let humanScore = 0;

playGame();