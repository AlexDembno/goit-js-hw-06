// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

// Подскажите что не так...

const divEl = document.querySelector('#controls');
const inputEl = divEl.firstElementChild;
const btnGreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
	const takeNumber = Number(inputEl.value);

	for (let i = 0; i < takeNumber; i += 1) {
		let firstSize = 30 + i * 10;
		const newDivs = divBoxesEl.insertAdjacentHTML(
			'afterbegin',
			`<div style="width: ${firstSize}px; height: ${firstSize}px; background-color: ${getRandomHexColor()}"></div>`,
		);

		getRandomHexColor(newDivs);
	}
};

const destroyBoxes = amount => {
	divBoxesEl.innerHTML = '';
};

function getRandomHexColor(event) {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnGreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
