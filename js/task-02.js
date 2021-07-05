const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newItem = ingredients.map(item => {
  const elemList = document.createElement('li');
  elemList.textContent = item;
  return elemList;
});

const listItem = document.querySelector('#ingredients');
listItem.append(...newItem);
console.log(listItem);
