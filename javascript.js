//console.log('hello world!');

//const shoot = prompt ("Rock, Paper, or Scissors?");

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

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

const resultLog = document.querySelector('.resultLog');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let winOrLose = document.createElement('span');
    winOrLose.textContent = playRound('rock', computerPlay());
    resultLog.appendChild(winOrLose);
    if (winOrLose.textContent.includes("Win")) {
        winCount++; 
    } else if (winOrLose.textContent.includes("Lose")) {
       loseCount++; } else { 
           tieCount++;
       };
    gameResult(resultLog.children.length, winCount, loseCount);
    console.log(resultLog.children.length, winCount, loseCount, tieCount);
    updateCount();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let winOrLose = document.createElement('span');
    winOrLose.textContent = playRound('paper', computerPlay());
    resultLog.appendChild(winOrLose);
    if (winOrLose.textContent.includes("Win")) {
        winCount++; 
    } else if (winOrLose.textContent.includes("Lose")) {
       loseCount++; } else { 
           tieCount++;
       };
       gameResult(resultLog.children.length, winCount, loseCount);
       console.log(resultLog.children.length, winCount, loseCount, tieCount);
       updateCount();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let winOrLose = document.createElement('span');
    winOrLose.textContent = playRound('scissors', computerPlay());
    resultLog.appendChild(winOrLose);
    if (winOrLose.textContent.includes("Win")) {
        winCount++; 
    } else if (winOrLose.textContent.includes("Lose")) {
       loseCount++; } else { 
           tieCount++;
       };
    gameResult(resultLog.children.length, winCount, loseCount);
    console.log(resultLog.children.length, winCount, loseCount, tieCount);
    updateCount();
});


function gameResult (games, wins, losses) {
    if (games === 5 && wins > losses) {
        let message = document.createElement('span');
        message.textContent = 'You Won!!';
        resultLog.appendChild(message);
        console.log('You Won!!');
    } else if (games === 5 && wins < losses) {
        let message = document.createElement('span');
        message.textContent = 'You Lost! What a Loser!';
        resultLog.appendChild(message);
        console.log('You Lost! What a Loser!');
    } else if (games === 5) {
        let message = document.createElement('span');
        message.textContent = 'You Tied!!';
        resultLog.appendChild(message);
        console.log('You Tied!!');
    };
}


//counter display
function updateCount () {
    let winCountSpan = document.querySelector('#winCount');
    winCountSpan.textContent = winCount;

    let loseCountSpan = document.querySelector('#loseCount');
    loseCountSpan.textContent = loseCount;

    let tieCountSpan = document.querySelector('#tieCount');
    tieCountSpan.textContent = tieCount;
}



// This is the segment I'm trying to figure out if have it return the you won the game, etc.
// if (resultLog.children.length = 5 && winCount > loseCount) {
//     resultLog.appendChild('You Won!!');
// } else if (resultLog.children.length = 5 && winCount < loseCount) {
//     resultLog.appendChild('You Lost! What a Loser!');
// } else if (resultLog.children.length = 5) {
//     resultLog.appendChild('You Tied!!');
// };



// function game () {
//  let winCount = 0;
//  let loseCount = 0;
//     for (var i = 0; i < 5; i++) {
//         let round = playRound(shoot, computerPlay());
//         console.log(round);
//         if (round.includes("Win")) {
//             winCount++;
//         } 
//         else if (round.includes("Lose")) {
//             loseCount++;
//         }
//     }
//  if (winCount > loseCount) {
//      return "You Won the game!";
//  } 
//  else if (winCount < loseCount) {
//      return "You Lost the game! Loser!";
//  } 
//  else {
//  return "You Tied!";
//  }
// }

//console.log(game());

