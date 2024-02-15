import { updateDate } from "./clockBox/updateDate.js";
import { updateTime } from "./clockBox/updateTime.js";
import { setTheme } from "./sidePanel/choosingTheme/choosingTheme.js";
import { createTimeZonesArr } from "./sidePanel/extraZones/createTimeZonesArr.js";
import { pressOnZoneElement } from "./sidePanel/extraZones/pressOnZoneElement.js";
import { isShownPanelExtraZones } from "./sidePanel/extraZones/shownPanelExtraZones.js";
import { hidePanel } from "./sidePanel/hidePanel/hidePanel.js";
import { searchDelete } from "./sidePanel/searchBlock/searchDelete.js";
import { searchInput } from "./sidePanel/searchBlock/searchInput.js";

window.onload = function () {
   document.getElementById("settings-button").style.display = "block";
   updateTime();
   updateDate();
   setInterval(updateTime, 1000);
   setInterval(updateDate, 100000);

   createTimeZonesArr();
   isShownPanelExtraZones()
   setTheme()
   pressOnZoneElement()
   searchInput()
   searchDelete()
   hidePanel()
}