let words = [];
let currentWord = '';
let attempts = 0;
const maxAttempts = 6;
let wins = 0;
let losses = 0;
let streak = 0;
let maxStreak = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadWords();
    updateScorecard();
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
    createOfficialWordleKeyboard();
}

function createGameBoard() {
    const game = document.getElementById('game');
    game.innerHTML = '';  // Clear any previous tiles
    for (let i = 0; i < maxAttempts * 5; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        game.appendChild(tile);
    }
}

function createOfficialWordleKeyboard() {
    const rows = [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnmenterdelete' // zxcvbnm and enter/delete on the same row
    ];
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';  // Clear any previous keys

    rows.forEach((row, index) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keyboard-row');
        row.split('').forEach(letter => {
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = letter.toUpperCase();
            key.dataset.key = letter;
            if (letter === 'enter') {
                key.classList.add('enter');
                key.addEventListener('click', handleEnter);
            } else if (letter === 'delete') {
                key.classList.add('delete');
                key.addEventListener('click', handleDelete);
            } else {
                key.addEventListener('click', () => handleKey(letter));
            }
            rowDiv.appendChild(key);
        });
        keyboard.appendChild(rowDiv);
    });
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
            if (currentAttempt === currentWord) {
                updateScore(true);
                endGame(true);
            } else if (attempts >= maxAttempts) {
                updateScore(false);
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
}

function updateKeyboard(letter, className) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.dataset.key === letter) {
            key.classList.add(className);
        }
    });
}

function endGame(win) {
    const message = document.getElementById('message');
    message.textContent = win ? 'You Win!' : `Game Over! The word was ${currentWord}`;
    document.querySelectorAll('.key').forEach(key => key.removeEventListener('click', handleKey));
    updateScorecard();
}

function displayMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}

function updateScore(win) {
    if (win) {
        wins++;
        streak++;
        if (streak > maxStreak) {
            maxStreak = streak;
        }
    } else {
        losses++;
        streak = 0;
    }
}

function updateScorecard() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('streak').textContent = streak;
    document.getElementById('maxStreak').textContent = maxStreak;
}
