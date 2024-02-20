export const utcId = "UTC/GMT"
export const utcLabel = "UTC/GMT, Universal Time (GMT±00:00)"

export const data = {
   initialLocalTimeZones: null,
   localTimeZones: [],
   isShownPanelExtraZones: false,
   isThemeDark: null,
   searchValue: ''
}

export const initialDataPromise = new Promise((resolve, reject) => {
   if (typeof chrome != "undefined" && typeof chrome.storage != "undefined" && typeof chrome.storage.sync != "undefined") {
      chrome.storage.sync.get(['newtabcolortheme', 'initiallocaltimezones'], function (storedData) {
         let initialZones = storedData.initiallocaltimezones;
         resolve({
            isThemeDark: storedData.newtabcolortheme === 'dark',
            initialLocalTimeZones: initialZones !== undefined ? initialZones : [utcId]
         });
      });
   } else {
      let initialZones = localStorage.getItem('initiallocaltimezones');
      resolve({
         isThemeDark: localStorage.getItem('newtabcolortheme') === 'dark',
         initialLocalTimeZones: initialZones !== null ? JSON.parse(initialZones) : [utcId]
      });
   }
})