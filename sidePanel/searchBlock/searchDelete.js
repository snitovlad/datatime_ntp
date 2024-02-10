import { data } from "../../data.js";
import { createElementLi } from "../extraZones/createElementLi.js";
import { inputSearch } from "./searchInput.js";

const clearButton = document.getElementById('clear-button');

export function searchDelete() {
   clearButton.addEventListener('click', () => {
      data.searchValue = '';
      inputSearch.value = ''
      createElementLi(data.localTimeZones)
   })
}
