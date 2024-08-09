let words = [];
let currentWord = '';
let attempts = 0;
const maxAttempts = 6;

document.addEventListener("DOMContentLoaded", () => {
    loadWords();
    setupKeyboardInput();
});

function loadWords() {
    fetch('words.txt')
        .then(response => response.text())
        .then(data => {
            words = data.split('\n').map(word => word.trim()).filter(word => word.length === 5);
            startGame();
        })
        .catch(error => console.error('Error loading words:', error));
}

function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    createGameBoard();
}

function createGameBoard() {
    const game = document.getElementById('game');
    for (let i = 0; i < maxAttempts * 5; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        game.appendChild(tile);
    }
}

let currentAttempt = '';

function setupKeyboardInput() {
    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key >= 'a' && key <= 'z') {
            handleKey(key);
        } else if (key === 'backspace') {
            handleDelete();
        } else if (key === 'enter') {
            handleEnter();
        }
    });
}

function handleKey(letter) {
    if (currentAttempt.length < 5) {
        currentAttempt += letter;
        updateBoard();
    }
}

function handleEnter() {
    if (currentAttempt.length === 5) {
        if (words.includes(currentAttempt)) {
            checkAttempt();
            currentAttempt = '';
            attempts++;
            if (attempts >= maxAttempts) {
                endGame(false);
            }
        } else {
            displayMessage('Not a valid word');
        }
    }
}

function handleDelete() {
    currentAttempt = currentAttempt.slice(0, -1);
    updateBoard();
}

function updateBoard() {
    const tiles = document.querySelectorAll('.tile');
    const startIndex = attempts * 5;
    for (let i = 0; i < 5; i++) {
        tiles[startIndex + i].textContent = currentAttempt[i] || '';
    }
}

function checkAttempt() {
    const tiles = document.querySelectorAll('.tile');
    const startIndex = attempts * 5;

    for (let i = 0; i < 5; i++) {
        const tile = tiles[startIndex + i];
        const letter = currentAttempt[i];
        if (currentWord[i] === letter) {
            tile.classList.add('correct');
        } else if (currentWord.includes(letter)) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }
    }

    if (currentAttempt === currentWord) {
        endGame(true);
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    setTimeout(() => messageElement.textContent = '', 1500); // Clear message after 1.5 seconds
}

function endGame(win) {
    const message = document.getElementById('message');
    message.textContent = win ? 'You Win!' : `Game Over! The word was ${currentWord}`;
    document.removeEventListener('keydown', handleKey); // Disable further input
}
