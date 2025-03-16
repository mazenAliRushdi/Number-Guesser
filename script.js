let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

submitButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
        submitButton.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
});

resetButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
    message.textContent = '';
});