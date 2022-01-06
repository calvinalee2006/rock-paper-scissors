//When uses presses button rock shows, rock shows, computer choice shows. 
const selectRock = document.getElementById('rock').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/rock.jpg>';
    //The computer randomly chooses it selection choice. 
    //Display choice to human user. 
});

const selectPaper = document.getElementById('paper').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/paper.jpg>';
});

const selectScissors = document.getElementById('scissors').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/scissors.jpg>';
});

const showHumanChoice = document.getElementById('human-select');
const showComputerChoice = document.getElementById('computer-select');
const showGameResult = document.getElementById('game-result');
const possibleChoices = document.querySelectorAll('button');

let humanChoice;
let computerChoice;
let result;


possibleChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    showHumanChoice.innerHTML = `You chose: ${humanChoice}`
    generateComputerChoice();
    gameResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock'
        document.getElementById('demo2').innerHTML = '<img src=images/rock.jpg>';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
        document.getElementById('demo2').innerHTML = '<img src=images/paper.jpg>';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
        document.getElementById('demo2').innerHTML = '<img src=images/scissors.jpg>';
    }
    showComputerChoice.innerHTML = `The computer chose: ${computerChoice}`;

}

function gameResult() {
    if (humanChoice === computerChoice) {
        result = "Draw";
        document.getElementById('result').innerHTML = '<img src = images/tie.gif>';
    }
    if (humanChoice === 'rock' && computerChoice === "paper") {
        result = 'You lose';
        document.getElementById('result').innerHTML = '<img src= images/youLOSE.gif>';
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        result = 'You Win';
        document.getElementById('result').innerHTML = '<img src= images/TheRockWins.gif>';
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        result = 'You win';
        document.getElementById('result').innerHTML = '<img src= images/makeItRain.gif>';
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        result = 'You lose';
        document.getElementById('result').innerHTML = '<img src= images/youLOSE.gif>';
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You lose';
        document.getElementById('result').innerHTML = '<img src= images/youLOSE.gif>';
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You win';
        document.getElementById('result').innerHTML = '<img src= images/makeItRain.gif>';
    }
    showGameResult.innerHTML = `The victor goes to: ${result}`;
}
