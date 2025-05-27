const accountId = 144553;
let accountEmail = "pulkit@gmail.com";
var accountPass = "12345";
accountCity = "Palwal"; // safe but do not use

let accountState; // undefined 

// accountId = 2; // not allowed

accountEmail = "pulli@gmail.com";
accountPass = "12345678";
accountCity = "Gurugram";

console.log(accountId);

/*
prefer not to use "var" because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])