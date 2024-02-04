export const data = {
   localTimeZones: [],
   isShownPanelExtraZones: false,
   isThemeDark: false
}

const tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function d() {
   const d = new Date();
   return d;
}
function dUTC() {
   const dUTC = new Date(d().getUTCFullYear(), d().getUTCMonth(), d().getUTCDate(), d().getUTCHours(), d().getUTCMinutes(), d().getUTCSeconds());
   return dUTC
}

const defaultOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }

//getting of a list of timezones
let zoneArr = Intl.supportedValuesOf('timeZone');

//create an array of objects with zones
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

export function updateDate() {
   let nyear = d().getYear();
   if (nyear < 1000) nyear += 1900;
   const dateboxElem = document.getElementById('datebox');
   dateboxElem.innerHTML = `${tday[d().getDay()]}, ${tmonth[d().getMonth()]} ${d().getDate()}, ${nyear}`;
}

export function shownPanelExtraZones() {
   if (data.isShownPanelExtraZones === false) {
      document.getElementById('button-block').classList.remove('active');
   } else { document.getElementById('button-block').classList.add('active') }
}

export function theme() {
   if (data.isThemeDark === false) {
      document.body.className = 'color-normal'
      document.getElementById('settings-button').className = 'color-normal'
   } else {
      document.body.className = 'color-dark'
      document.getElementById('settings-button').className = 'color-dark'
   }
}