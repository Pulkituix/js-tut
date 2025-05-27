const myarr = [0,1,2,3,4,5,true,"Pulkit"];

const myarr2 = new Array(1,2,3,4);

// Array methods

// myarr.push(6);
// console.log(myarr);
// myarr.pop();

// myarr.unshift(9); // put 9 at 0th index and then shift each element by 1 index
// myarr.shift(); // removes 0th index element

// includes(?)
// indexof(?)

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr); // string

// slice, splice

console.log("A ", myarr);

const new1 = myarr.slice(1,3); // gives 1 to 2

console.log(new1);

console.log("B ", myarr);

const new2 = myarr.splice(1,3); // gives 1 to 3 and also removes 1 to 3 from original array

console.log("C ", myarr);

console.log(new2);