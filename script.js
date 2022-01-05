//When uses presses button rock shows, rock shows, computer choice shows. 
const selectRock = document.getElementById('choices').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/rock.jpg>';
    //The computer randomly chooses it selection choice. 
    //Display choice to human user. 
});

const selectPaper = document.getElementById('choices').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/paper.jpg>';
});

const selectScissors = document.getElementById('choices').addEventListener('click', (e) => {
    document.getElementById('demo1').innerHTML = '<img src=images/scissors.jpg>';
});

const showHumanChoice = document.getElementById('human-select');
const showComputerChoice = document.getElementById('computer-select');
const gameResult = document.getElementById('game-result');
const possibleChoices = document.querySelectorAll('choices');

let humanChoice;
let computerChoice;


possibleChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    showHumanChoice.innerHTML = `You chose: ${humanChoice}`
    generateComputerChoice()
}))



function generateComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoice = document.getElementById('demo2').innerHTML = `The computer chose: ${computerChoice}`

}




























