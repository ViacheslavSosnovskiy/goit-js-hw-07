const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  let num = event.target.value;
  textRef.style.fontSize = `${num}px`;
});
