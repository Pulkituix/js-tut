const name = "Pulkit";
const repoCount = 10;

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Puli_21'); // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // it does not changes the original string, makes copy

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5);
// console.log(newString);

const anotherstring = gameName.slice(-6,4);
// console.log(anotherstring);

const newone = "  Pulkit  ";
// console.log(newone);
// console.log(newone.trim());

const url = "http://pulkit.com/pu%20lli";
// console.log(url.replace('%20','-'));

// console.log(url.includes('pulkit'));

console.log(gameName.split('_'));