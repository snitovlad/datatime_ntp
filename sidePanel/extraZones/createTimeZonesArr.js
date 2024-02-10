import { d, dUTC } from "../../clockBox/dataForDate.js";
import { data } from "../../data.js";

//getting of a list of timezones
let zoneArr = Intl.supportedValuesOf('timeZone');

//create an array of objects with zones
export function createTimeZonesArr() {
   data.localTimeZones = zoneArr.map((zone) => {

      const zoneEl = {};
      zoneEl.id = zone;
      const localHours = d().toLocaleString('us-EN', { hour: '2-digit', hour12: false, timeZone: zone });
      const localMinutes = d().toLocaleString('us-EN', { minute: '2-digit', hour12: false, timeZone: zone });

      let offsetInHours = localHours - dUTC().getHours();
      if (offsetInHours <= -12) offsetInHours += 24;
      if (offsetInHours > 12) offsetInHours -= 24;

      let offsetInMinutes = 0;
      if (offsetInHours >= 0) {
         offsetInMinutes = localMinutes - dUTC().getMinutes();
         if (offsetInMinutes < 0) {
            offsetInMinutes += 60;
            offsetInHours--;
         }
      } else if (offsetInHours < 0) {
         offsetInMinutes = dUTC().getMinutes() - localMinutes;
         if (offsetInMinutes < 0) {
            offsetInMinutes += 60;
            offsetInHours++;
         }
      }
      
      if (offsetInMinutes === 0) offsetInMinutes = '00'
      if (offsetInHours >= 0) offsetInHours = '+' + offsetInHours;

      zoneEl.zoneOffset = `${offsetInHours}.${offsetInMinutes}`;
      let title = `${zone.split('/').reverse().join(', ').replace(/_/g, " ")} (GMT${offsetInHours}:${offsetInMinutes}) `;
      zoneEl.zoneName = title;
      zoneEl.isOnLocalTimebox = false;
      return zoneEl
   })
   //sort the array by zones
   data.localTimeZones.sort((a, b) => b.zoneOffset - a.zoneOffset)

   return data.localTimeZones
}


