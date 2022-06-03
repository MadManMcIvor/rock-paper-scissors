console.log('hello world!');


function computerPlay () {
    let options = ["Rock", "Paper", "Scissors"];
    let result = options[Math.floor(Math.random()*options.length)];
    return result;
}

console.log(computerPlay());