// import functions and grab DOM elements
import { randomThrow, didUserWin, displayOff, displayOn, changeBackgroundColor, changeBorderColor } from './utils.js';

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
const playerImage = document.getElementById('player-image');
const betDisplay = document.getElementById('bet-display');

// initialize state
let bank = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let bet = 0;
let gameResults;
let commentary;

// local functions
function resetScores() {
    bet = 0;
    bank = 0;
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
}

// set event listeners to update state and DOM
betDisplay.addEventListener('click', () => {
    bet < 3 ? bet++ : bet = 1;

    betDisplay.textContent = bet;
});

playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const playerThrow = selectedRadioButton.value;
    const computerThrow = randomThrow();
    
    round++;
    
    displayOn(playAgainButton, resetButton);
    displayOff(rock, paper, scissors, betDisplay);
    
    if (didUserWin(playerThrow, computerThrow) === 'win') {
        wins++;
        bank += bet;
        
        gameResults = `You WIN Round ${round}!`;
        commentary = `🤖 "Beep boop bleep! My ${computerThrow} must have malfunctioned!"`;
        
        changeBackgroundColor(gameResultsDiv, 'aqua');
    }
    
    if (didUserWin(playerThrow, computerThrow) === 'lose') {
        losses++;
        bank -= bet;
        
        gameResults = `Robot WINS Round ${round}!`;
        commentary = `🤖 "Puny human! My ${computerThrow} destroyed you easily!"`;
        
        changeBackgroundColor(gameResultsDiv, 'hotpink');
    }
    
    if (didUserWin(playerThrow, computerThrow) === 'draw') {
        draws++;
        
        gameResults = `Round ${round} is a DRAW...`;
        commentary = `🤖 "How original to simply copy my ${computerThrow}!"`;
        
        changeBackgroundColor(gameResultsDiv, 'yellow');
        changeBorderColor(compImage, 'yellow');
        changeBorderColor(playerImage, 'yellow');
    }
    
    compImage.src = `./assets/${computerThrow}.png`;
    playerImage.src = `./assets/${playerThrow}.png`;

    displayOn(compImage, playerImage);
    displayOff(playButton);
    
    gameResultsDiv.textContent = gameResults;
    commentaryDiv.textContent = commentary;
    scoreTallyDiv.textContent = `🏆×${wins} 💰×${bank} 🦾×${losses} 😐×${draws}`;
});

playAgainButton.addEventListener('click', () => {
    bet = 0;
    betDisplay.textContent = '¢';

    changeBorderColor(compImage, 'hotpink');
    changeBorderColor(playerImage, 'aqua');

    displayOn(rock, paper, scissors, playButton, betDisplay);
    displayOff(playerImage, compImage, playAgainButton, resetButton);
});

resetButton.addEventListener('click', () => {    
    resetScores();

    betDisplay.textContent = '¢';
    gameResultsDiv.textContent = 'Reset! Start new game?';
    scoreTallyDiv.textContent = '';
    commentaryDiv.textContent = '';
    
    changeBackgroundColor(gameResultsDiv, 'greenyellow');

    displayOn(rock, paper, scissors, playButton, betDisplay);
    displayOff(playerImage, compImage, playAgainButton, resetButton);
});
