import { data } from "../../data.js";

const switchOn = document.getElementById('on');
export function setTheme() {
   switchOn.checked = data.isThemeDark
   document.getElementById('theme-button').addEventListener('change', () => {
      data.isThemeDark = switchOn.checked === true;
      theme()
   })
}

function theme() {
   const suffix = data.isThemeDark ? 'dark' : 'normal';
   document.body.className = `color-${suffix}`
   document.getElementById('settings-button').className = `color-${suffix}`
   if (typeof chrome != "undefined" && typeof chrome.storage != "undefined" && typeof chrome.storage.sync != "undefined") {
      chrome.storage.sync.set({ newtabcolortheme: suffix });
   }
}

