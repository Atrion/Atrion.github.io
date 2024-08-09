let words = [];
let currentWord = '';
let attempts = 0;
const maxAttempts = 6;

document.addEventListener("DOMContentLoaded", () => {
    loadWords();
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
    createKeyboard();
}

function createGameBoard() {
    const game = document.getElementById('game');
    for (let i = 0; i < maxAttempts * 5; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        game.appendChild(tile);
    }
}

function createKeyboard() {
    const rows = [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm'
    ];
    const keyboard = document.getElementById('keyboard');

    rows.forEach(row => {
        row.split('').forEach(letter => {
            const key = document.createElement('div');
            key.classList.add('key');
            key.textContent = letter;
            key.addEventListener('click', () => handleKey(letter));
            keyboard.appendChild(key);
        });
    });

    const enterKey = document.createElement('div');
    enterKey.classList.add('key');
    enterKey.textContent = 'Enter';
    enterKey.style.gridColumn = "span 2";
    enterKey.addEventListener('click', handleEnter);
    keyboard.appendChild(enterKey);

    const deleteKey = document.createElement('div');
    deleteKey.classList.add('key');
    deleteKey.textContent = 'Del';
    deleteKey.style.gridColumn = "span 2";
    deleteKey.addEventListener('click', handleDelete);
    keyboard.appendChild(deleteKey);
}

let currentAttempt = '';

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
            displayMessage('Invalid word');
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
            updateKeyboard(letter, 'correct');
        } else if (currentWord.includes(letter)) {
            tile.classList.add('present');
            updateKeyboard(letter, 'present');
        } else {
            tile.classList.add('absent');
            updateKeyboard(letter, 'absent');
        }
    }

    if (currentAttempt === currentWord) {
        endGame(true);
    }
}

function updateKeyboard(letter, className) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.textContent === letter) {
            key.classList.add(className);
        }
    });
}

function endGame(win) {
    const message = document.getElementById('message');
    message.textContent = win ? 'You Win!' : `Game Over! The word was ${currentWord}`;
    document.querySelectorAll('.key').forEach(key => key.removeEventListener('click', handleKey));
}

function displayMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}
