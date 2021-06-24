// const actions = document.querySelectorAll(".js-action button");
// console.log(actions);

// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);

// const heroTitle = document.querySelector(".hero__title");

// heroTitle.textContent = "Обновленный заголовок";

// console.log(heroTitle);

//============== список ===============
const navEl = document.querySelector(".site-nav");
console.log(navEl.classList);

// navEl.classList.add("super-cool");
// navEl.classList.remove("super-cool");
// navEl.classList.toggle("add and remove"); // при клике убирает или добавлет
// navEl.classList.replace("supper-cool", "qwerty");

// ============= ссыллки ===============
// const currentPageUrl = "/portfolio";
// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`
// );
// // .site-nav__link[href="/about"];
// console.log(linkEl);

// linkEl.classList.add("site-nav__link--current");

// =============== добавление тегов ================
// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "Это заголовок старницы";
// console.log(titleEl);

// document.body.appendChild(titleEl);

// ============== создаем список ================

const item = document.createElement("li");

item.classList.add("site-nav__item");

const link = document.createElement("a");
link.classList.add("site-nav__link");
link.textContent = "личный кабинет";
link.href = "/profile";

item.appendChild(link);
console.log(item);

const navEl = document.querySelector(".site-nav");
navEl.appendChild(item);
