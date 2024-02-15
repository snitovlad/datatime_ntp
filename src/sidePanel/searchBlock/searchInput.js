import { data } from "../../data.js";
import { createElementLi } from "../extraZones/createElementLi.js";

export const inputSearch = document.getElementById('input-zones-search');

export function searchInput() {
   inputSearch.addEventListener('input', () => {
      data.searchValue = inputSearch.value;
      //create a variable for the regular expression
      const searchValueForReg = new RegExp(data.searchValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi')
      //forming a window with zones depending on the search string
         let arrLocalTimeZones = data.localTimeZones.filter(el => el.zoneName.match(searchValueForReg))
         createElementLi(arrLocalTimeZones)
   })
}