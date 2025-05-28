// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "America")
// map.set('Fr', "France")
// map.set('Fr', "France")

// for (const [key, value] of map) { // forof loop
//     // console.log(key, ":", value);
// }
// // map does nor print duplicate

// // objects cannot be iterated like this => we can use forin loop
// const obj = {
//     1 : "a",
//     2 : "b",
//     3 : "c"
// }

// for (const key in obj) {
//     // console.log(key, ":", obj[key]);
// }

// // Array : forof => gives value, forin => gives index(key) => we can use arr[index] in forin


// const coding = ["js", "cpp", "py", "c"];

// coding.forEach( function (item) {
//     // console.log(item);
// } )

// coding.forEach( (language) => { // arrow function
//     // console.log(language);
// })

// function printMe(item){
//     // console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => { // parameter also includes "index" and "array".
//     // console.log(item, index, arr);
// })

// const myCode = [
//     {
//         lang : "javascript",
//         langfile : "js"
//     },
//     {
//         lang : "java",
//         langfile : "java"
//     },
//     {
//         lang : "python",
//         langfile : "py"
//     }
// ]

// myCode.forEach( (item) => {
//     // console.log(item.lang);
// } )



// const coding = ["js", "cpp", "py", "c"];

// // forEach does not return anything
// const value = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);

// const myNums = [1,2,3,4,5,6,7,8];

// const newNums = myNums.filter((num) => num > 4); // filter returns the value

// const newNums = myNums.filter((num) => {
//     return num > 4; // we have to use return here because of {} (we have opened the scope)
// });
// console.log(newNums);

// const newNums = [];
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNum.map((num) => num*10).map((num) => num+1).filter((num) => num > 50); // chaining
// console.log(newNums);


// Reduce*****//

// const myNums = [1,2,3,4];
// const myTotal = myNums.reduce((acc,curVal) => {
//     console.log(acc, " ", curVal);
//     return acc + curVal;
// }, 0);
// console.log(myTotal);


const shopping = [
    {
        price : 100
    },
    {
        price : 200
    },
    {
        price : 300
    },
    {
        price : 400
    },
    {
        price : 500
    }
]

const total = shopping.reduce((acc, curval) => {
    return acc + curval.price;
}, 0);
console.log(total);