function computerPlay() {
    let num = Math.floor(Math.random() * 3)+1;
    if(num === 1) {
        return "rock";
    } else if(num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            return "Tie. Rock ties rock.";
        } else if(computerSelection === 'paper') {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            return "You win! Paper beats rock.";
        } else if(computerSelection === 'paper') {
            return "Tie. Paper ties paper.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else {
        if(computerSelection === 'rock') {
            return "You lose! Rock beats scissors.";
        } else if(computerSelection === 'paper') {
            return "You win! Scissors beat paper.";
        } else {
            return "You tie. Scissors tie scissors.";
        }
    }
}

function game() {
    let statement;
    let yourScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++) {
        statement = playRound(prompt("Rock, paper, or scissors?"), computerPlay());
        console.log(statement);
        if(statement.includes("You win!")) {
            yourScore++;
        } else if(statement.includes("You lose!")) {
            computerScore++;
        }
    }
    console.log("Final Score: ");
    console.log("You: " + yourScore);
    console.log("Computer: " + computerScore);
}

game();
