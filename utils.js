export function randomThrow() {
    const throwAsNumber = Math.ceil(Math.random() * 3);
    if (throwAsNumber === 1) return 'rock';
    if (throwAsNumber === 2) return 'paper';
    if (throwAsNumber === 3) return 'scissors';
}

export function didUserWin(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'rock' && computer === 'paper') return 'lose';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'paper' && computer === 'scissors') return 'lose';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === 'scissors' && computer === 'rock') return 'lose';
}

export function displayOff() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].style.display = 'none';
    }}
    
export function resetScores() {
    for (let i = 0; i < arguments.length; i++) {
        return arguments[i] = 0;
    }}

export function displayOn() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].style.display = 'block';
    }}

export function changeBackgroundColor(input, color) {
    input.style.backgroundColor = color;
}

export function changeBorderColor(input, color) {
    input.style.borderColor = color;
}
