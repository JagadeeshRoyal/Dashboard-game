let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }
}

function restartGame() {
    startGame();
    document.getElementById('result').textContent = '';
    document.getElementById('guessInput').value = '';
}

// Initialize the game
startGame();
