const words = ["banana", "abroad", "branch", "breath", "bridge", "casual", "cactus", "carbon", "carrer", "castle", "couple", "domain", "double", "driven", "driver"];
let correctWord = "";
let currentGuess = 0;
const maxGuesses = 6;

const grid = document.getElementById('grid');
const messageBox = document.getElementById('message');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resetBtn = document.getElementById('reset-btn');

function initializeGame() {
    correctWord = words[Math.floor(Math.random() * words.length)];
    console.log("Correct word: " + correctWord);
    currentGuess = 0;
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;

    messageBox.textContent = "Make your guess! You have " + maxGuesses + " guesses left.";
    messageBox.style.backgroundColor = "white";

    grid.innerHTML = "";
    for (let i = 0; i < 36; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        grid.appendChild(box);
    }
}

function checkProximity(guess)

    if (guess === correctWord) {
        messageBox.textContent = "Correct! You've guessed the word!";
        messageBox.style.backgroundColor = "green";
        return true;
    } else if (proximity <= 10) {
        messageBox.style.backgroundColor = "red";
        messageBox.textContent = "You have " + (maxGuesses - currentGuess - 1) + " guesses left. " + "Please guess again";
    } else {
        messageBox.style.backgroundColor = "white";
        messageBox.textContent = "You have " + (maxGuesses - currentGuess - 1) + " guesses left. " + "Please guess again";
    }
    return false;
}

guessBtn.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 6 || !/^[a-z]+$/.test(guess)) {
        alert("Please enter a valid 6-letter word!");
        return;
    }

    if (currentGuess < maxGuesses) {
        if (checkGuess(guess)) {
            guessInput.disabled = true;
            guessBtn.disabled = true;
        } else {
            currentGuess++;
            guessInput.value = "";
        }
    } else {
        alert("Game over! You've used all guesses.");
    }
});

function checkGuess(guess) {
    const guessArray = guess.split('');
    const correctArray = correctWord.split('');

    for (let i = 0; i < guessArray.length; i++) {
        const box = grid.children[currentGuess * 6 + i];
        box.textContent = guessArray[i];

        if (guessArray[i] === correctArray[i]) {
            box.className = 'box green';
        } else {
            box.className = 'box';
        }
    }
    return checkProximity(guess);
}

resetBtn.addEventListener('click', () => {
    initializeGame();
});

initializeGame();
