let user = [];
if(user.length === 0){
    // console.log("Empty Array");
}

let emptyObj = {};
if(Object.keys(emptyObj).length === 0){ // Object.keys(emptyObj) => inserts the keys in the array, Object.values(emptyObj) => inserts theh values in the array
    // console.log("Empty Object");
}


// Nullish coalescing operator (??) : null undefined
let val;

val = 5 ?? 10;
console.log(val); // assigns first value 

val = null ?? 15;
console.log(val); // if null then assings second value

val = undefined ?? 20;
console.log(val); // 20 will be the output

val = null ?? 25 ?? 30;
console.log(val); // 25


// Terniary operator
const price = 200;
price >= 100 ? console.log("Greater than 100") : console.log("Less than 100");