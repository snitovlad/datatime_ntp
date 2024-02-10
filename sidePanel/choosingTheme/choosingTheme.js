import { data } from "../../data.js";

const switchOn = document.getElementById('on');
export function setTheme() {
   document.getElementById('theme-button').addEventListener('change', () => {
      if (switchOn.checked === true) {
         data.isThemeDark = true
      } else {
         data.isThemeDark = false
      }
      theme()
   })
}

function theme() {
   if (data.isThemeDark === false) {
      document.body.className = 'color-normal'
      document.getElementById('settings-button').className = 'color-normal'
   } else {
      document.body.className = 'color-dark'
      document.getElementById('settings-button').className = 'color-dark'
   }
}

