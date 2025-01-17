let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Validate number is between 1 and 100
  if (isNaN(guess)) {
    displayMessage('Please enter a valid number.');
  } else if (guess < 1 || guess > 100) {
    displayMessage('Please enter a number between 1 and 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Check if the guess is correct, too high, or too low
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! The number was ${guess}.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Oops! The number is too low. Try again.');
  } else {
    displayMessage('Oops! The number is too high. Try again.');
  }
}

function displayGuess(guess) {
  // Display the guess on the DOM
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Display a message on the DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // End the game and disable input
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Reset the game for a new round
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', () => {
    userInput.removeAttribute('disabled');
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
    lowOrHi.innerHTML = '';
    startOver.removeChild(p);
    playGame = true;
  });
}
