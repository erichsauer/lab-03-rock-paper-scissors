// import functions and grab DOM elements
import { randomThrow, didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const playAgainButton = document.getElementById('play-again-button');
const resetButton = document.getElementById('reset-button');
const gameResultsDiv = document.getElementById('game-result-div');
const scoreTallyDiv = document.getElementById('score-tally-div');
const commentaryDiv = document.getElementById('commentary');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const compImage = document.getElementById('comp-image');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let gameResults;
let commentary;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const playerThrow = selectedRadioButton.value;
    const computerThrow = randomThrow();

    playAgainButton.style.display = 'block';
    resetButton.style.display = 'block';

    round++;
    
    if (playerThrow !== 'rock') rock.style.display = 'none';

    if (playerThrow !== 'paper') paper.style.display = 'none';

    if (playerThrow !== 'scissors') scissors.style.display = 'none';

    if (didUserWin(playerThrow, computerThrow) === 'win') {
        wins++;

        gameResults = `You WON Round ${round}! Play agin?`;
        commentary = `🤖 "Beep boop bleep! My ${computerThrow} must have malfunctioned!"`;
        
        gameResultsDiv.style.backgroundColor = 'aquamarine';
    }
    if (didUserWin(playerThrow, computerThrow) === 'lose') {
        losses++;
        
        gameResults = `You LOST Round ${round}!`;
        commentary = `🤖 "Puny human! My ${computerThrow} destroyed you easily!"`;
        
        gameResultsDiv.style.backgroundColor = 'hotpink';
    }
    if (didUserWin(playerThrow, computerThrow) === 'draw') {
        draws++;
        
        gameResults = `Round ${round} is a DRAW!`;
        commentary = `🤖 "How original to simply copy my ${computerThrow}!"`;
        
        gameResultsDiv.style.backgroundColor = 'yellow';
    }
    
    compImage.src = `./assets/${computerThrow}.png`;
    compImage.style.display = 'block';
    playButton.style.display = 'none';
    
    gameResultsDiv.textContent = gameResults;
    commentaryDiv.textContent = commentary;
    scoreTallyDiv.textContent = `🏆×${wins} 😵×${losses} 😐×${draws}`;
});

playAgainButton.addEventListener('click', () => {
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    compImage.style.display = 'none';
    playButton.style.display = 'block';
    playAgainButton.style.display = 'none';
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
    
    gameResultsDiv.textContent = 'Game reset!';
    scoreTallyDiv.textContent = '';
    commentaryDiv.textContent = '';
    
    gameResultsDiv.style.backgroundColor = 'greenyellow';
    playAgainButton.style.display = 'none';
    resetButton.style.display = 'none';
});