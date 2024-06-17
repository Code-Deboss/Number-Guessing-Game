const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsLeftSpan = document.getElementById('attemptsLeft');
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  attemptsLeft--;
  attemptsLeftSpan.textContent = attemptsLeft;

  if (guess === secretNumber) {
    message.textContent = 'Congratulations! You guessed the number!';
    guessInput.disabled = true; // Disable input after win
    playWinSound(); // New function to add sound effect
  } else if (guess > secretNumber) {
    message.textContent = 'Too high! Try again.';
  } else {
    message.textContent = 'Too low! Try again.';
  }

  if (attemptsLeft === 0) {
    message.textContent = `You lose! The number was ${secretNumber}`;
    guessInput.disabled = true; // Disable input after loss
  } else {
    message.textContent += ` You have ${attemptsLeft} attempts left.`;
  }

  guessInput.value = ''; // Clear input field after each guess
}

function newGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  attemptsLeftSpan.textContent = attemptsLeft;
  message.textContent = '';
  guessInput.disabled = false; // Enable input for new game
  guessInput.value = ''; // Clear input field
}

function playWinSound() {
  const winSound = new Howl({
    src: ['audio/win.mp3'] // Path to your win sound effect
  });
  winSound.play();
}