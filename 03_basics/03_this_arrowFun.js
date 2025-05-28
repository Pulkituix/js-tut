const user = {
    username: "Pulkit",
    price: 100,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Pulli";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let name = "Pulkit";
//     console.log(this);
//     // console.log(this.name); // undefined
// }
// chai();

// const chai = function(){
//     let name = "Pulkit";
//     console.log(this);
//     // console.log(this.name); // undefined
// }
// chai();

// **** Arrow Function

// const chai = () => {
//     let name = "Pulkit";
//     console.log(this);
//     // console.log(this.name); // undefined
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(1,2));

// const obj = () => ({username : "Pulkit"});  // for object
// console.log(obj());