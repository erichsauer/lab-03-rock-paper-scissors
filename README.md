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
- Add event listener:
    - play button

# Logic plan

- if user plays rock
    - computer plays rock and draw++
    - computer plays scissors and win++
    - computer plays paper and loss++
- if user plays paper
    - computer plays rock and win++
    - computer plays scissors and loss++
    - computer plays paper and draw++
- if user plays scissors
    - computer plays rock and loss++
    - computer plays scissors and draw++
    - computer plays paper and win++
    
    