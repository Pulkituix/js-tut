// singleton => // Object.create

// object literals

const sym = Symbol("key1");

const jsUser = {
    name: "Pulkit",
    [sym]: "myKey1",
    "full Name": "Pulkit Aggarwal",
    age: 23,
    location: "Palwal",
    email: "pulkit@uix.in",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // "" => used because keys are taken as string at backend

// console.log(jsUser.full Name); // will not work
// console.log(jsUser["full Name"]); // this is good practice
// console.log(jsUser[sym]);

// Object.freeze(jsUser); // after "freeze" its value can't be changed
// jsUser.email = "pulkitaggarwal@gmail.com";
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello jsUSer");
// }

// console.log(jsUser.greeting); // we have recieved a function return back. Funtion does not executed only gives its reference
// console.log(jsUser.greeting());

// jsUser.greetingTwo = function(){
//     console.log(`Hello jsUSer, ${this.name}`);  // "this" is used to give reference of the object
// }

// console.log(jsUser.greetingTwo());


// we can make objects of an object

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = (obj1, obj2); // it will make object of object => we cannot use this

// const obj3 = Object.assign(obj1, obj2); // right syntax => here obj1 is the target object

// const obj3 = Object.assign({}, obj1, obj2); // same result => here {} this is the target object

const obj3 = {...obj1, ...obj2}; // spread operator for combining

// console.log(obj3);

const user = [
    {

    },
    {

    }
]

// console.log(Object.keys(jsUser)); //  returns array of keys ***** very useful

// console.log(Object.values(jsUser)); //  returns array of value ***** very useful

// console.log(Object.entries(jsUser)); // it gives array of array

// console.log(jsUser.hasOwnProperty('age')); // gives true or false 