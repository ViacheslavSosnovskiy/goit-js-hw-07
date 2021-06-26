const colorPickerOptions = [
  { label: "red", color: "#f44336" },
  { label: "green", color: "#4caf50" },
  { label: "blue", color: "#2196f3" },
  { label: "grey", color: "#607d8b" },
  { label: "pink", color: "#e91e63" },
  { label: "indigo", color: "#3f51b5" },
];

// const option = colorPickerOptions[1];

// const button = document.createElement("button");
// button.type = "button";
// button.textContent = option.label;
// button.style.backgroundColor = option.color;

// console.log(button);

const colorPickerOptionsEl = document.querySelector("js-color-picker");

const colorPickerOptions = (options) => {
  return options.map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("color-option");
    button.textContent = option.label;
    button.style.backgroundColor = option.color;

    return button;
  });
};

console.log(elements);

// colorPickerOptionsEl.append(...elements);

console.log(colorPickerOptionsEl.append(...elements));
