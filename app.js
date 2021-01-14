// import functions and grab DOM elements
import { randomThrow, didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const gameResultsDiv = document.getElementById('game-result-div');
const scoreTallyDiv = document.getElementById('score-tally-div');
const commentaryDiv = document.getElementById('commentary');

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
    const computerThrow = randomThrow();
    const playerThrow = selectedRadioButton.value;

    round++;

    if (didUserWin(playerThrow, computerThrow) === 'win') {
        wins++;

        gameResults = `You WON Round ${round}! Play agin?`;
        commentary = `🤖 "Beep boop bleep! My ${computerThrow} must have malfunctioned!"`;
        
        gameResultsDiv.style.backgroundColor = 'aquamarine';
    }
    if (didUserWin(playerThrow, computerThrow) === 'lose') {
        losses++;
        
        gameResults = `You LOST Round ${round}! Play again?`;
        commentary = `🤖 "Puny human! My ${computerThrow} destroyed you easily!"`;
        
        gameResultsDiv.style.backgroundColor = 'hotpink';
    }
    if (didUserWin(playerThrow, computerThrow) === 'draw') {
        draws++;
        
        gameResults = `Round ${round} is a DRAW! Play again?`;
        commentary = `🤖 "How original to simply copy my ${computerThrow}!"`;
        
        gameResultsDiv.style.backgroundColor = 'yellow';
    }
    
    gameResultsDiv.textContent = gameResults;
    commentaryDiv.textContent = commentary;
    scoreTallyDiv.textContent = `🏆×${wins} 😵×${losses} 😐×${draws}`;
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
    
    gameResultsDiv.textContent = 'Game reset! Want to play again?';
    scoreTallyDiv.textContent = '';
    commentaryDiv.textContent = '';
    
    gameResultsDiv.style.backgroundColor = 'greenyellow';
});