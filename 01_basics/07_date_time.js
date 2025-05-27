// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // toLocalString is used for time
// console.log(typeof myDate); // object

// let mycreatedDate = new Date(2025, 0, 27); // months in javascript starts from 0 for this syntax
// let mycreatedDate = new Date(2025, 0, 27, 5, 3); 
let mycreatedDate = new Date("2024-05-27");  // here months start from 1. Places of date, month and year can be changed
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // In milliseconds
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // In seconds