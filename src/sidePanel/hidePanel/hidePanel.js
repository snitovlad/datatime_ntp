import { data } from "../../data.js";
import { buttonElement, shownPanelExtraZones } from "../extraZones/shownPanelExtraZones.js";

const settingsButtonElement = document.getElementById('button-block');

//close buttons when clicking on an empty place
export function hidePanel() {
   document.addEventListener('click', (e) => {
      const withinSetBut = e.composedPath().includes(settingsButtonElement);
      const withinBut = e.composedPath().includes(buttonElement);
      if (!withinSetBut && !withinBut) {
         data.isShownPanelExtraZones = false;
      }
      shownPanelExtraZones()
   })
}