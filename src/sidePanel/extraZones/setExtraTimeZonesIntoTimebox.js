import { updateDate } from "../../clockBox/updateDate.js";
import { updateTime } from "../../clockBox/updateTime.js";
import { data } from "../../data.js";

export function setExtraTimeZonesIntoTimebox(isInitial = false) {
	const localTimeboxContainer = document.getElementById('extra-clocks-table');

	localTimeboxContainer.innerHTML = '';

	let newInitialTimeZones = [];

	data.localTimeZones.forEach((element) => {
		if (element.isOnLocalTimebox === true) {
			let timezone = element.id
			newInitialTimeZones.push(timezone)
			let clock = document.createElement('td');
			clock.id = "clockbox-" + timezone;
			clock.innerText = "00:00:00"

			let label = document.createElement('td');
			// removing everything except the city name
			label.innerText = element.zoneName.replace(/,.*$/, '');
			label.className = "extra-clockbox-label"

			let container = document.createElement("tr")
			container.id = element.id
			container.append(label)
			container.append(clock)
			localTimeboxContainer.append(container)
		}
	})
	if (!isInitial) {
		data.initialLocalTimeZones = newInitialTimeZones;
		if (typeof chrome != "undefined" && typeof chrome.storage != "undefined" && typeof chrome.storage.sync != "undefined") {
			chrome.storage.sync.set({ 'initiallocaltimezones': data.initialLocalTimeZones });
		} else {
			localStorage.setItem('initiallocaltimezones', JSON.stringify(data.initialLocalTimeZones));
		}

		updateTime();
		updateDate();
	}
}