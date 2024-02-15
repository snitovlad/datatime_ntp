import { d, dUTC, defaultOptions } from "./dataForDate.js";

export function updateTime() {
   document.querySelectorAll('[id^=clockbox]').forEach(elem => {
      let id = elem.id
      let tz = id.replace('clockbox', '').replace('-', '');
      switch (tz) {
         case '': elem.innerHTML = d().toLocaleString('us-EN', defaultOptions); break;
         case 'UTC/GMT': elem.innerHTML = dUTC().toLocaleString('us-EN', defaultOptions); break;
         default: elem.innerHTML = d().toLocaleString('us-EN', { ...defaultOptions, timeZone: tz });
      }
   })
}