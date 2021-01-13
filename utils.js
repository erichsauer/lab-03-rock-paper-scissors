export function randomThrow() {
    const throwAsNumber = Math.ceil(Math.random() * 3);
    if (throwAsNumber === 1) return 'rock';
    if (throwAsNumber === 2) return 'paper';
    if (throwAsNumber === 3) return 'scissors';
}

// Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

// TDD a didUserWin function that:

// Has two parameters: player and computer
// Returns one of the following values:
// draw - the throws are identical
// win - the player's throw beats the computer throw
// lose - the computer's throw beats the player's throw
// Write one test at a time, each test can address one of the nine possible outcomes.

// You can assume valid input, meaning the passed input will always be a valid throw of rock, paper, or scissors.