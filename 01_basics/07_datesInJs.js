//Date - Object in JavaScript
// let myDate = new Date();
// console.log(myDate.toString()); // Current date and time

// console.log(myDate.toLocaleString()); // Current year
// console.log(myDate.toDateString()); // Current year
// console.log(myDate.toJSON()); // Current time
// console.log(myDate.toTimeString()); // Current time in ISO format

let myCreatedDate = new Date('12-28-2025 10:00:00');

// console.log(myCreatedDate.toString());

let myTimestamp = Date.now();
console.log(myTimestamp); // Current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // Timestamp of created date in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',

})