// https://www.w3schools.com/js/js_functions.asp
console.log("\n------------------- FUNCTIONS -------------------\n");

// FUNCTIONS
// function sayHello() {
//   console.log("Hello")
// }

// sayHello();

// function writeLn(message) {
//   console.log(message);
// }

// const rasid = {
//   firstName: "Rasid",
//   lastName: "Türkmen"
// }

// writeLn(rasid)

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

// VARIABLES
let addition = add(1, 2);
let substraction = sub(1, 2);
let multiplication = mul(5, 52);
let division = div(1, 2);

// PRINT RESULTS
// console.log("addition: ", addition);
// console.log("substraction: ", substraction);
// console.log("multiplication: ", multiplication);
// console.log("division: ", division);

// @Task
//  Calculate the factorial of a given number
//  function factorial(5) => 1 * 2 * 3 * 4 * 5
//  Hint: use a loop
// console.log("@TASK: functions")


/**
 * Solution 1
 */
function factorial(number) {
  let result = 1;
  if (number <= 0) return result;

  for (let i = result; i <= number; i++) {
    result *= i;
  }

  return result;
}

/**
 * Solution 1
 */
function factorialRecursive(number) {
  let result = 1;
  if (number <= 0) return result;

  return number * factorialRecursive(number - 1)
}

const factorialNumber = 10;

const factorialResult = factorial(factorialNumber);
console.log("Factorial of " + factorialNumber + ": " + factorialResult);

const factorialRecursiveResult = factorialRecursive(factorialNumber);
console.log("Factorial_Recursive of " + factorialNumber + ": " + factorialRecursiveResult);

module.exports = {};
