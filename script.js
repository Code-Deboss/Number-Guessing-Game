const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  attemptsLeft--;

  if (guess === secretNumber) {
    message.textContent = 'Congratulations! You guessed the number!';
    guessInput.disabled = true; // Disable input after win
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
