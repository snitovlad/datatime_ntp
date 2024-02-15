export const utcId = "UTC/GMT"
export const utcLabel = "UTC/GMT, Universal Time (GMT±00:00)"

export const data = {
   initialLocalTimeZones: Array.from(document.querySelectorAll("tr")).map(el => el.id),
   localTimeZones: [],
   isShownPanelExtraZones: false,
   isThemeDark: document.body.className === "color-dark",
   searchValue: ''
}

