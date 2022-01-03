//When uses presses button rock shows, rock shows, computer choice shows. 
const selectRock = document.getElementById('rock-button').addEventListener('click', (e) => {
    document.getElementById('demo').innerHTML = '<img src=images/rock.jpg>';
    //The computer randomly chooses it selection choice. 
    //Display choice to human user. 
});

const selectPaper = document.getElementById('paper-button').addEventListener('click', (e) => {
    document.getElementById('demo').innerHTML = '<img src=images/paper.jpg>';
});

const selectScissors = document.getElementById('scissors-button')
    .document.getElementById('demo').innerHTML = '<img src=images/scissors.jpg>';


const showHumanChoice = document.getElementById('human-select');
const showComputerChoice = document.getElementById('computer-select');
const gameResult = document.getElementById('game-result');
const possibleChoices = document.querySelectorAll('button');

let humanChoice;
let computerChoice;

possibleChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    showHumanChoice.innerHTML = humanChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    showComputerChoice.innerHTML = computerChoice;
}



//The computer will not pick anything without the human choice.






















