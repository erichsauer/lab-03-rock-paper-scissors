# THE PLAN

## HTML Setup

- Explain the rules in a list
    - rock beats scissors
    - paper beats rock
    - scissors beats paper
    - two of the same is a draw!
- Radio buttons
    - rock
    - paper
    - scissors
- Button for "Play"
- Display div for wins and losses and draws
- Display of result of each game
    - should indicate what the computer threw and what the result was (win, loss, draw)

## JS Setup

- Import getRandomThrow and doesUserWin functions
- Grab DOM elements
    - currently selected radio button (inside click handler)
    - play button
    - win/loss/draw div
    - game result div
    - play again button
- Setup Application State 
    wins = 0
    losses = 0
    draws = 0
- Add event listener(s):
    - play button
    - play again button
    