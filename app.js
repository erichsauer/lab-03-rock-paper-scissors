// import functions and grab DOM elements
import { randomThrow, didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const gameResultsDiv = document.getElementById('game-result-div');
const scoreTallyDiv = document.getElementById('score-tally-div');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let gameResults;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const computerThrow = randomThrow();
    const playerThrow = selectedRadioButton.value;

    round++;

    if (didUserWin(playerThrow, computerThrow) === 'win') {
        wins++;
        gameResults = `You Won Round ${round}! Play agin?`;
    }
    if (didUserWin(playerThrow, computerThrow) === 'lose') {
        losses++;
        gameResults = `You Lost Round ${round}! Play again?`;
    }
    if (didUserWin(playerThrow, computerThrow) === 'draw') {
        draws++;
        gameResults = `Round ${round} is a draw! Play again?`;
    }

    gameResultsDiv.textContent = gameResults;
    scoreTallyDiv.textContent = `${wins} 🏆, ${losses} 🤕, ${draws} 😐`;


    console.log('you', playerThrow, 'computer', computerThrow, 'wins', wins, 'losses', losses, 'draws', draws);
});