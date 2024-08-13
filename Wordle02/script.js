let words = [];
let currentWord = '';
let attempts = 0;
const maxAttempts = 6;
let wins = 0;
let losses = 0;
let currentStreak = 0;
let maxStreak = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadWords();
    createScorecard();
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
    game.innerHTML = ''; // Clear existing content
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
        'zxcvbnm',
    ];

    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = ''; // Clear existing content

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keyboard-row');

        row.split('').forEach(letter => {
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = letter.toUpperCase();
            key.addEventListener('click', () => handleKey(letter));
            rowDiv.appendChild(key);
        });

        keyboard.appendChild(rowDiv);
    });

    // Adding "Enter" and "Delete" buttons
    const bottomRow = document.createElement('div');
    bottomRow.classList.add('keyboard-row');

    const enterKey = document.createElement('button');
    enterKey.classList.add('key', 'enter');
    enterKey.textContent = 'Enter';
    enterKey.addEventListener('click', handleEnter);

    const deleteKey = document.createElement('button');
    deleteKey.classList.add('key', 'delete');
    deleteKey.textContent = 'Delete';
    deleteKey.addEventListener('click', handleDelete);

    bottomRow.appendChild(enterKey);
    bottomRow.appendChild(deleteKey);
    keyboard.appendChild(bottomRow);
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

    if (currentAttempt === currentWord) {
        endGame(true);
    }
}

function updateKeyboard(letter, className) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.textContent.toLowerCase() === letter) {
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

function createScorecard() {
    const scorecard = document.getElementById('scorecard');
    scorecard.innerHTML = `
        <h2>Scorecard</h2>
        <p>Wins: <span id="wins">0</span></p>
        <p>Losses: <span id="losses">0</span></p>
        <p>Current Streak: <span id="currentStreak">0</span></p>
        <p>Max Streak: <span id="maxStreak">0</span></p>
    `;
}

function updateScore(win) {
    if (win) {
        wins++;
        currentStreak++;
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    } else {
        losses++;
        currentStreak = 0;
    }
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('currentStreak').textContent = currentStreak;
    document.getElementById('maxStreak').textContent = maxStreak;
}
