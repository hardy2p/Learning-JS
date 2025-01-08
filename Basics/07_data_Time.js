//Date and time object is JS:-
//We will study a bit later about it in detail.
// Date object is used to work with dates and times.

// Create a new date object with the current date and time
let currentDate = new Date();
console.log("Current Date and Time: ", currentDate);

// Get the current year
let year = currentDate.getFullYear();
console.log("Year: ", year);

// Get the current month (0-11, where 0 is January and 11 is December)
let month = currentDate.getMonth();
console.log("Month: ", month + 1); // Adding 1 to get the correct month number

// Get the current date
let date = currentDate.getDate();
console.log("Date: ", date);

// Get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
let day = currentDate.getDay();
console.log("Day: ", day);

// Get the current hour
let hours = currentDate.getHours();
console.log("Hours: ", hours);

// Get the current minutes
let minutes = currentDate.getMinutes();
console.log("Minutes: ", minutes);

// Get the current seconds
let seconds = currentDate.getSeconds();
console.log("Seconds: ", seconds);

// Get the current milliseconds
let milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds: ", milliseconds);

// Create a new date object with a specific date and time
let specificDate = new Date('2023-10-01T10:20:30Z');
console.log("Specific Date and Time: ", specificDate);