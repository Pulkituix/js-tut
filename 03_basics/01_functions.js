// function sayMyName(){
//     console.log("Pulkit");
// }

// sayMyName();

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(1,2);

// function add(num1, num2){
//     let result = num1+num2;
//     return result;
// }

// const ans = add(1,2);
// console.log(ans);

function loginUserMessage(username){ // (username = "sam") // default value "sam"is given
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just loggedIn`;
}

// console.log(loginUserMessage("Pulkit"));
// console.log(loginUserMessage()) // undefined just loggedIn


function calculatePrice(val1, ...num1){ // ... => inserted the arguments in array, here ... is called "rest operator". Here val1 = 100 and num1 = [400, 500]
    return num1;
}
// console.log(calculatePrice(200, 400, 500));

const user = {
    username: "Pulkit",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user); // here we can directly pass the object => handleobject({username : "Pulkit", price: "200"})

// similarly we can use "Array"
const arr = [1,2,3,4];

function returnvalue(getarray){
    return getarray[2];
}

console.log(returnvalue(arr));