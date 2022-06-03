console.log('hello world!');

const shoot = 'Rock'

function computerPlay () {
    let options = ["Rock", "Paper", "Scissors"];
    let result = options[Math.floor(Math.random()*options.length)];
    return result;
}


function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === "ROCK" && computer === "PAPER") {
        return "You Lose! Paper beats Rock!";
        }
    else if (player === "ROCK" && computer === "ROCK") {
        return "You Tie!";
        }
    else if (player === "ROCK" && computer === "SCISSORS") {
        return "You Win! Rock beats Scissors!";
        }
    else if (player === "PAPER" && computer === "PAPER") {
        return "You Tie!";
        }
    else if (player === "PAPER" && computer === "SCISSORS") {
        return "You Lose! Scissors beats Paper!";
        }
    else if (player === "PAPER" && computer === "ROCK") {
        return "You Win! Paper beats Rock!";
        }
    else if (player === "SCISSORS" && computer === "PAPER") {
        return "You Win! Scissors beats Paper!";
        }
    else if (player === "SCISSORS" && computer === "ROCK") {
        return "You Lose! Rock beats Scissors!";
        }
    else if (player === "SCISSORS" && computer === "SCISSORS") {
        return "You Tie!";
        } 
    else {return "You didn't put in 'Rock', 'Paper', or 'Scissors', did you? You idiot!"}
}

function game () {
 let winCount = 0;
 let loseCount = 0;
    for (var i = 0; i < 5; i++) {
        let round = playRound(shoot, computerPlay());
        console.log(round);
        if (round.includes("Win")) {
            winCount++;
        } 
        else if (round.includes("Lose")) {
            loseCount++;
        }
    }
 if (winCount > loseCount) {
     return "You Won the game!";
 } 
 else if (winCount < loseCount) {
     return "You Lost the game! Loser!";
 } 
 else {
 return "You Tied!";
 }
}

console.log(game());