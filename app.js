// import functions and grab DOM elements
import { randomThrow, didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const gameResultsDiv = document.getElementById('game-results-div');
const scoreTallyDiv = document.getElementById('score-tally-div');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const computerThrow = randomThrow();
    const playerThrow = selectedRadioButton.value;

    if (didUserWin(playerThrow, computerThrow) === 'win') wins++;
    if (didUserWin(playerThrow, computerThrow) === 'lose') losses++;
    if (didUserWin(playerThrow, computerThrow) === 'draw') draws++;

    console.log('you', playerThrow, 'computer', computerThrow, 'wins', wins, 'losses', losses, 'draws', draws);
});