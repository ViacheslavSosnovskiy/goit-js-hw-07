const list = document.querySelector('#categories');
console.log(`В списке ${list.children.length} категории.`);

const item = document.querySelectorAll('.item h2');

item.forEach(element => {
  console.log(`Категория: ${element.textContent}`);
  console.log(
    `Количество элементов: ${element.nextElementSibling.children.length}`
  );
});
