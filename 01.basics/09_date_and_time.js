let myDate = new Date();
console.log(myDate); // Outputs the current date and time in the console
console.log(myDate.toString()); // Outputs the current date and time in a human-readable format
console.log(myDate.toDateString()); // Outputs the date in a human-readable format
console.log((myDate.toLocaleString())); // Outputs the date and time in a locale-specific format
console.log(myDate.toISOString()); // Outputs the date in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(myDate.getFullYear()); // Outputs the year (e.g., 2023)
console.log(myDate.getMonth()+1); // Outputs the month (1-12), adding 1 since months are zero-indexed
console.log(myDate.getDate()); // Outputs the day of the month (1-31)       

console.log(typeof myDate); // Outputs "object" since Date is an object in JavaScript

let myCreatedDate = new Date(2004, 0, 22); // Creates a date for January 22, 2004
console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now(); // Gets the current timestamp in milliseconds since January 1, 1970
console.log(myTimeStamp); // Outputs the current timestamp
console.log(myCreatedDate.getTime()); // Outputs the timestamp for the created date