console.log("\n------------------- OPERATORS -------------------\n");

let a = 10;
let b = 10;
let c = a + b;
let mix = "Ali is " + c + " years old";
// console.log(mix)

console.log("\n------------------- ARITHMETIC -------------------\n");
let first = 7;
let second = 22;

let result = first + second;
// console.log(result);
// console.log(first - second);
// console.log(first * second);
// console.log(first / second);
// console.log(first % 3);

first = 0;
first = first + 7;
first += 7; // => same as: first = first + 7
// console.log(first);

// https://www.w3schools.com/js/js_comparisons.asp
console.log("\n------------------- COMPARISONS -------------------\n");

let x = 2;
let y = "2";
let z = "2";

// console.log("x == y", x == y);
// console.log("x > y", x > y);
// console.log("x >= y", x >= y);
// console.log("x != y", x != y);

// console.log("not equal by value: y != c", y != z);
// console.log("not equal by value and type: y !== z", y !== z);

console.log("equal by value: y == z", y == z);
console.log("equal by value and type: y === z", y === z);

module.exports = {};
