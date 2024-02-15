import { initialDataPromise, data } from "./data.js";
import { updateDate } from "./clockBox/updateDate.js";
import { updateTime } from "./clockBox/updateTime.js";
import { setTheme } from "./sidePanel/choosingTheme/choosingTheme.js";
import { hidePanel } from "./sidePanel/hidePanel/hidePanel.js";
import { createTimeZonesArr } from "./sidePanel/extraZones/createTimeZonesArr.js";
import { pressOnZoneElement } from "./sidePanel/extraZones/pressOnZoneElement.js";
import { isShownPanelExtraZones } from "./sidePanel/extraZones/shownPanelExtraZones.js";
import {setExtraTimeZonesIntoTimebox} from "./sidePanel/extraZones/setExtraTimeZonesIntoTimebox.js";
import { searchDelete } from "./sidePanel/searchBlock/searchDelete.js";
import { searchInput } from "./sidePanel/searchBlock/searchInput.js";

window.onload = function () {
   initialDataPromise.then((initial) => {
      data.isThemeDark = initial.isThemeDark
      data.initialLocalTimeZones = initial.initialLocalTimeZones
      setTheme()
      createTimeZonesArr()
      setExtraTimeZonesIntoTimebox(true)

      updateTime();
      updateDate();
      setInterval(updateTime, 1000);
      setInterval(updateDate, 100000);

      document.body.style.display = "block";

      isShownPanelExtraZones()
      pressOnZoneElement()
      searchInput()
      searchDelete()
      hidePanel()

   })
}