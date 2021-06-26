// const actions = document.querySelectorAll(".js-action button");
// console.log(actions);

// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);

// const heroTitle = document.querySelector(".hero__title");

// heroTitle.textContent = "Обновленный заголовок";

// console.log(heroTitle);

//============== список ===============
// const navEl = document.querySelector(".site-nav");
// console.log(navEl.classList);

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

// ========= первый элемент - все элементы ===========

// const navEl = document.querySelector(".site-nav");

// const firstElement = navEl.children[1]; // доступ к любому элем.

// const firstElement = navEl.firstElementChild; -- первый элем.

// const firstElement = navEl.children; -- все элем.

// console.log(firstElement);

// ============== создаем элементы ===================

// вставка узлов : ----- appendChild(elem) ------ последний элем.

const titleEl = document.createElement("h2");
titleEl.classList.add("title-h2");
titleEl.textContent = "заголовок h2";
console.log(titleEl);

document.body.appendChild(titleEl);

// ============== создаем и добавляем меню ================
const itemEl = document.createElement("li");
itemEl.classList.add("nav-item");
const linkEl = document.createElement("a");
linkEl.classList.add("nav-link");
linkEl.href = "http://google.com";
linkEl.textContent = "ссылка на страницу";

itemEl.appendChild(linkEl);

const navEl = document.querySelector(".site-nav");
navEl.appendChild(itemEl);

console.log(navEl);

console.log(itemEl);
console.log(linkEl);

// === вставка узлов : ----- insertBefore(elem, nextSibling) ------ первый  элем. ===

navEl.insertBefore(itemEl, navEl.firstElementChild);
console.log(navEl);

// ============= добаить много элементов за один раз  ---- append(... elem) ----

navEl.append(itemEl, linkEl);
