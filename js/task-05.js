const userInput = document.querySelector('#name-input');
const userOutput = document.querySelector('#name-output');

userInput.addEventListener('input', event => {
  userOutput.textContent = event.target.value
    ? event.target.value
    : 'незнакомец';
});
