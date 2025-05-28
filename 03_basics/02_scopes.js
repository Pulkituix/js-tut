let a =200;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner", a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "Pulkit";

    function two(){
        const website = "Youtube";
        // console.log(username);
    }
    // console.log(website); // error

    two();
}
// one();

if(true){
    const username = "Pulkit";
    if(username == "Pulkit"){
        const website = "Youtube";
        // console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error


// *********************** //

// addone(5); // correct
function addone(num){
    return num+1;
}
addone(5);

// addTwo(5); // error
const addTwo = function(num){
    return num+2;
}
addTwo(5);