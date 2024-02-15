import { data} from "../../data.js";
import { createElementLi } from "./createElementLi.js";

export const buttonElement = document.getElementById('settings-button');

//open and close button block by clicking on the button
export function isShownPanelExtraZones() {
	buttonElement.addEventListener('click', () => {
		if (data.isShownPanelExtraZones === false) {
			data.isShownPanelExtraZones = true
		} else {
			data.isShownPanelExtraZones = false
		}
		shownPanelExtraZones()
		createElementLi(data.localTimeZones)
		
	})
}

export function shownPanelExtraZones() {
	if (data.isShownPanelExtraZones === false) {
		document.getElementById('button-block').classList.remove('active');
	} else { document.getElementById('button-block').classList.add('active') }
}

