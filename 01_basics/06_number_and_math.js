const score = 400;

const balance = new Number(100);

// console.log(score);
// console.log(balance);

// console.log(balance.toString()); // becomes string

// console.log(balance.toFixed(2)); // 100 => 100.00

const othernumber = 23.9876;

// console.log(othernumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// ******** Maths ******** //

// console.log(Math);

// console.log(Math.random()); // gives value between 0 and 1 only. 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);