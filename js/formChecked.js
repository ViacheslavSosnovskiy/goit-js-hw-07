const refs = {
  input: document.querySelector(""),
  nameLabel: document.querySelector(""),
  licenseCheckbox: document.querySelector(""),
  btn: document.querySelector(""),
};

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}

//  ========= слушатель событий на клавиатуру =======

window.addEventListener("keydown"); //  на все клавиши
window.addEventListener("keypress"); // только текстовые клавиши

refs.output.textContent += event.key;

function onClearOutput() {
  refs.output.textContent = "";
}
