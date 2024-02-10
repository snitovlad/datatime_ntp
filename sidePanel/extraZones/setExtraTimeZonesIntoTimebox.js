import { updateDate } from "../../clockBox/updateDate.js";
import { updateTime } from "../../clockBox/updateTime.js";
import { data } from "../../data.js";

export function setExtraTimeZonesIntoTimebox() {
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