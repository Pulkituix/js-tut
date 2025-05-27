// Primitive : Call by value
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

const ousideTemp = null;
const BigIntNumber = 9876543219876n;
// console.log(id === anotherId); // false => hence they are different


// Reference (Non Primitive) : Call by reference
    // Array, Objects, Functions

const heros = ["shaktiman", "doga"];

let myObj = {
    name : "Pulkit",
    age : 23
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof ousideTemp); // object
console.log(typeof BigIntNumber);