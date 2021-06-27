// import qweqwe from "./js/products.js";
// console.log(qweqwe);

const products = [
  {
    name: "Сервоприводы",
    description: "Lorem ipsum — классический текст-«рыба».",
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: "Телевизоры",
    description: "Lorem ipsum — классический текст-«рыба».",
    price: 51000,
    available: false,
    onSale: true,
  },

  {
    name: "Ноутбики",
    description: "Lorem ipsum — классический текст-«рыба».",
    price: 24500,
    available: true,
    onSale: true,
  },
];

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.textContent = name;
  nameEl.classList.add("product__name");

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product__descr");

  const priceEl = document.createElement("p");
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add("product__price");

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[0]));

const elements = products.map(makeProductCard);

console.log(elements);

const productsConteinerEl = document.querySelector(".js-products");

productsConteinerEl.append(...elements);
