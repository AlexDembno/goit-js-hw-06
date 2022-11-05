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

const divEl = document.querySelector('#controls');
const inputEl = divEl.firstElementChild;
const btnGreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

const takeInputValue = event => {
	const qwe = Number(event.currentTarget.value);
	createBoxes(qwe);
};

function createBoxes(amount) {
	const firstSize = 30;
	for (let i = 1; i <= amount; i += 1) {
		i *
			divBoxesEl.insertAdjacentHTML(
				'afterbegin',
				`<div style="width: ${firstSize}px; height: ${firstSize}px"></div>`,
			);
		getRandomHexColor(divBoxesEl);
	}
}

const destroyBoxes = amount => {
	const divNew = divBoxesEl.firstElementChild;
	divNew.remove();
};

function getRandomHexColor(event) {
	const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	event.style.color = random;
}

inputEl.addEventListener('input', takeInputValue);
btnGreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
