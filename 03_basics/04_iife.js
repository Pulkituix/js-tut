// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // named iife
    console.log("hellooo");
})(); // here ";" will be used to end the function for two functions consecutively

( (name) => { // unamed iife
    console.log(`hii ${name}`);
})("Pulkit")