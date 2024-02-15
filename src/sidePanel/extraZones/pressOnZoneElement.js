import { data } from "../../data.js";
import { setExtraTimeZonesIntoTimebox } from "./setExtraTimeZonesIntoTimebox.js";

//hang the handler on ul
const ulZoneList = document.querySelector('#timezone-options');

export function pressOnZoneElement() {
   ulZoneList.addEventListener('click', (event) => {
      let element = data.localTimeZones.filter(el => el.id === event.target.id)
      if (element[0].isOnLocalTimebox === false) {
         element[0].isOnLocalTimebox = true
         event.target.classList.add('active')
      } else {
         element[0].isOnLocalTimebox = false
         event.target.classList.remove('active')
      }
      setExtraTimeZonesIntoTimebox();
   })
}