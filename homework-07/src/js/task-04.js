// const container = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
let value = 0;
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
