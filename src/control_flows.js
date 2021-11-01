//https://www.w3schools.com/js/js_if_else.asp
console.log("\n------------------- CONTROL FLOWS -------------------\n");

let a = 20;
let b = 11;

if (a === 20) {
  console.log("a is 20");
}

if (a === b) {
  console.log("a = b");
} else {
  console.log("a != b");
}

if (a === 10) {
  console.log("a = 10");
} else if (a < 10) {
  console.log("a < 10");
} else if (a > 30) {
  console.log("a > 10");
} else {
  console.log("else");
}

// @TASK
/*
  1)  Define a let variable 'age'
  2)  Age can not be negative
    2.1) If it is negative, then log 'Negative age is not allowed'
  3)  If age is between 0-3, log 'I am baby'
  4)  If age is between 4-10, log 'I am child'
  5)  If age is between 11-17, log 'I am young'
  6)  If age is between 18-50, log 'I am adult'
  7)  If age is greater than 50, log 'I am old' 
  console.log("@TASK: if/else")
 */

let age = 100;

if (age < 0) {
  console.log("Negative age is not allowed");
} else if (age >= 0 && age <= 3) {
  console.log("I am a baby");
} else if (age >= 4 && age <= 10) {
  console.log("I am a child");
} else if (age > 10 && age <= 17) {
  console.log("I am young");
} else if (age > 17 && age <= 50) {
  console.log("I am an adult");
} else {
  console.log("I am very old");
}

module.exports = {};
