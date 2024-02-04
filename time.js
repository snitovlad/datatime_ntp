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
			label.innerText = element.zoneName

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

//create li with timezones
for (let i = 0; i < data.localTimeZones.length; i++) {
	let newList = document.createElement('li');
	newList.innerText = data.localTimeZones[i].zoneName;
	newList.id = data.localTimeZones[i].id;
	document.getElementById("timezone-options").append(newList)
}

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