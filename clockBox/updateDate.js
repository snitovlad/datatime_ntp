import { d, tday, tmonth } from "./dataForDate.js";

export function updateDate() {
   let nyear = d().getYear();
   if (nyear < 1000) nyear += 1900;
   const dateboxElem = document.getElementById('datebox');
   dateboxElem.innerHTML = `${tday[d().getDay()]}, ${tmonth[d().getMonth()]} ${d().getDate()}, ${nyear}`;
}