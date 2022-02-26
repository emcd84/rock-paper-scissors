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

const container = document.querySelector('body');
const results = document.createElement('h1');
const yourScore = document.createElement('p');
const computerScore = document.createElement('p');
const winMessage = document.createElement('h2');
let you = 0;
let comp = 0;

//Buttons
const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    let resp = playRound("rock", computerPlay());
    if(resp.includes("You win")) {
        you++;
    } else if(resp.includes("You lose")) {
        comp ++;
    }
    results.textContent = resp;
    yourScore.textContent = 'Your Score: ' + you;
    computerScore.textContent = 'Computer Score: ' + comp;
    results.appendChild(yourScore);
    results.appendChild(computerScore);

    if(you == 5) {
        winMessage.textContent = 'You win!!!';
        results.appendChild(winMessage);
    } else if(comp == 5) {
        winMessage.textContent = 'You lose!!!';
        results.appendChild(winMessage);
    }
    container.appendChild(results);
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    let resp = playRound("paper", computerPlay());
    if(resp.includes("You win")) {
        you++;
    } else if(resp.includes("You lose")) {
        comp ++;
    }
    results.textContent = resp;
    yourScore.textContent = 'Your Score: ' + you;
    computerScore.textContent = 'Computer Score: ' + comp;
    results.appendChild(yourScore);
    results.appendChild(computerScore);

    if(you == 5) {
        winMessage.textContent = 'You win!!!';
        results.appendChild(winMessage);
    } else if(comp == 5) {
        winMessage.textContent = 'You lose!!!';
        results.appendChild(winMessage);
    }
    container.appendChild(results);
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    let resp = playRound("scissors", computerPlay());
    if(resp.includes("You win")) {
        you++;
    } else if(resp.includes("You lose")) {
        comp ++;
    }
    results.textContent = resp;
    yourScore.textContent = 'Your Score: ' + you;
    computerScore.textContent = 'Computer Score: ' + comp;
    results.appendChild(yourScore);
    results.appendChild(computerScore);

    if(you == 5) {
        winMessage.textContent = 'You win!!!';
        results.appendChild(winMessage);
    } else if(comp == 5) {
        winMessage.textContent = 'You lose!!!';
        results.appendChild(winMessage);
    }
    container.appendChild(results);
});



