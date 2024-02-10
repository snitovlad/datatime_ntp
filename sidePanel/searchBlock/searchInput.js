import { data } from "../../data.js";
import { createElementLi } from "../extraZones/createElementLi.js";

export const inputSearch = document.getElementById('input-zones-search');

export function searchInput() {
   inputSearch.addEventListener('input', () => {
      data.searchValue = inputSearch.value;
      //создаем переменную для регулярного выражения 
      const searchValueForReg = new RegExp(data.searchValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi')
      //формируем окно с зонами в зависимости от строки поиска
         let arrLocalTimeZones = data.localTimeZones.filter(el => el.zoneName.match(searchValueForReg))
         createElementLi(arrLocalTimeZones)
   })
}