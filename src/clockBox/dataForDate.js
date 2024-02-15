export const tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function d() {
   const d = new Date();
   return d;
}
export function dUTC() {
   const dUTC = new Date(d().getUTCFullYear(), d().getUTCMonth(), d().getUTCDate(), d().getUTCHours(), d().getUTCMinutes(), d().getUTCSeconds());
   return dUTC
}

export const defaultOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }