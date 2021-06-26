import qweqwe from "./data/products.js";
console.log(qweqwe);

const product = {
  name: "Сервоприводы",
  description: "Lorem ipsum — классический текст-«рыба».",
  price: 2000,
  available: true,
  onSale: true,
};

const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
nameEl.classList.add("product__name");

const descrEl = document.createElement("p");
descrEl.textContent = product.description;
descrEl.classList.add("product__descr");

const priceEl = document.createElement("p");
priceEl.textContent = `Цена: ${product.price} кредитов`;
priceEl.classList.add("product__price");

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

productEl.append(nameEl, descrEl, priceEl);
console.log(productEl);
