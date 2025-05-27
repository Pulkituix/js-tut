const marvel = ["thor","ironman"];
const dc = ["superman","flash"];

// marvel.push(dc); // pushes the whole "dc" array because array can have any type of data

// console.log(marvel);
// console.log(marvel[2][0]);

// const all = marvel.concat(dc); // concat merges both the arrays
// console.log(all);

// const all = [...marvel, ...dc]; // ... => spread operator => merges the array
// console.log(all);

// const another_array = [1,2,3,[4,5],6,[7,8,[9,10],11]];

// const flat_array = another_array.flat(Infinity); // flat => makes it 1D array
// console.log(flat_array);

// console.log(Array.isArray("Pulkit")); // false
// console.log(Array.from("Pulkit")); // makes array of letters
// console.log(Array.from({name : "Pulkit"})); // empty

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));