import { shownPanelExtraZones, data, theme, updateDate, updateTime } from "./data.js";

window.onload = function () {
	updateTime();
	updateDate();
	setInterval(updateTime, 1000);
	setInterval(updateDate, 100000);
}

function getValue() {
	const localTimeboxContainer = document.querySelector('.local-clockbox-container');

	localTimeboxContainer.innerHTML = '';

	data.localTimeZones.forEach((element) => {
		if (element.isOnLocalTimebox === true) {
			let span = document.createElement('span');
			let timezone = element.id
			span.id = "clockbox-" + timezone;
			span.innerText = "00:00:00"

			let label = document.createElement('span');
			label.innerText = element.zoneName.replace(/\(\w+[\W\d+]+\)/, ''); //deleted "(GMT+8:00)"

			let container = document.createElement("div")
			container.id = element.id
			container.className = "extra-clockbox-container"

			container.append(label)
			container.append(span)
			localTimeboxContainer.append(container)
		}
	})
	updateTime();
	updateDate();
}

const searchInput = document.getElementById('input-zones-search');
searchInput.addEventListener('input', () => {
	data.searchValue = searchInput.value;
	//создаем переменную для регулярного выражения 
	const searchValueForReg = new RegExp(data.searchValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi')
	//формируем окно с зонами в зависимости от строки поиска
	if (data.searchValue.length <= 2) {
		createElementLi(data.localTimeZones)
	} else {
		let arrLocalTimeZones = data.localTimeZones.filter(el => el.zoneName.match(searchValueForReg))
		createElementLi(arrLocalTimeZones)
	}
})

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
	data.searchValue = '';
	searchInput.value = ''
	createElementLi(data.localTimeZones)
})

//create li with timezones
function createElementLi(arr) {
	document.getElementById("timezone-options").innerHTML = "";
	arr.map(el => {
		const newList = document.createElement('li');
		newList.innerText = el.zoneName;
		newList.id = el.id;
		if (el.isOnLocalTimebox === true) newList.classList.add('active');
		return document.getElementById("timezone-options").append(newList)
	})
}

createElementLi(data.localTimeZones)


//hang the handler on ul
const ulZoneList = document.querySelector('#timezone-options');
ulZoneList.addEventListener('click', (event) => {
	let element = data.localTimeZones.filter(el => el.id === event.target.id)
	if (element[0].isOnLocalTimebox === false) {
		element[0].isOnLocalTimebox = true
		event.target.classList.add('active')
	} else {
		element[0].isOnLocalTimebox = false
		event.target.classList.remove('active')
	}
	getValue();
})

const settingsButtonElement = document.getElementById('button-block');
const buttonElement = document.getElementById('settings-button');

//open and close button block by clicking on the button
buttonElement.addEventListener('click', () => {
	if (data.isShownPanelExtraZones === false) {
		data.isShownPanelExtraZones = true
	} else {
		data.isShownPanelExtraZones = false
	}
	shownPanelExtraZones()
})

//close buttons when clicking on an empty place
document.addEventListener('click', (e) => {
	const withinSetBut = e.composedPath().includes(settingsButtonElement);
	const withinBut = e.composedPath().includes(buttonElement);
	if (!withinSetBut && !withinBut) {
		data.isShownPanelExtraZones = false;
	}
	shownPanelExtraZones()
})

const switchOn = document.getElementById('on');
document.getElementById('theme-button').addEventListener('change', () => {
	if (switchOn.checked === true) {
		data.isThemeDark = true
	} else {
		data.isThemeDark = false
	}
	theme()
})


// 1. Текст при изменении разрешения экрана (стягивании окна) уменьшается

// 2. В светлой теме довольно неудобно читаются надписи из-за цветов, можно было бы подумать какие выбрать, чтобы было понятнее проще, подпись day/night как будто расплывчата немного, типа как без очков читаешь, можно вообще сделать текст рядом, а кнопку без подписей, просто слайдер

// 3. Очень хотелось бы видеть строку поиска (фильтр) по тексту, чтобы я мог например вписать "Europe" и он мне показал все таймзоны для европы, или "Minsk" или "GMT +2" и тд 

