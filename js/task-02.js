// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listWithId = document.querySelector('#ingredients');

const createEl = ingredients.forEach(el => {
	const itemGreat = document.createElement('li');
	itemGreat.textContent = el;
	itemGreat.classList.add('item');
	listWithId.append(itemGreat);
	console.log(itemGreat);
});

// const createEl = (arrey, callback) => {
// 	return callback(arrey);
// };

// const callback = arrey => {
// 	arrey.forEach(el => {
// 		const itemGreat = document.createElement('li');
// 		itemGreat.textContent = el;
// 		itemGreat.classList.add('item');
// 		listWithId.append(itemGreat);
// 		console.log(itemGreat);
// 	});
// };

// console.log(createEl(ingredients, callback));

// Посмотрите плиз, правильно ли я понимаю callback функцию, спасибо.
