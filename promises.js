// Promise is an "OBJECT" representing the eventual completion

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Pulkit", email : "p@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Pulkit", password : "1234"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => { 
    console.log(user); // console.log(user.username)
    return user.username
}).then((name) => {
    console.log(name)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("The Promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "Mona", password : "9876"})
        }
        else{
            reject("Error : JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive;      // this will not give reject, only resolve
    // console.log(response);

    // try catch will take care of "error(reject)"
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive();
// we can use "asyn/await" or ".then .catch" both


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json(); // it takes time so we have to use "await" for this
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("E: ", error)
})