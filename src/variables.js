/**
 * See https://www.w3schools.com/js
 */

// ------------------- VARIABLES and DATA TYPES ------------------- //

let birthYear; // Statement

birthYear = 2000; // Number primitive datatype

let address = "Hello, how are you"; // String primitive datatype

let undef = undefined; // primitive datatype
let _true = true; // Boolean primitive datatype
let _false = false; // Boolean primitive datatype

const contantNumber = 20; // constant cannot be reassigned 


// NOT PRIMITIVE DATA TYPES: Array, Object
// Array
let countries = ["Austria", "Turkey", "France", "Germany"];

// Object
let ali = {
  firstName: "Ali",
  lastName: "Veli",
  age: 20,
  height: 185.7,
  birthday: 123
};

// Access variables
console.log("birth year:", birthYear);
console.log("address:", address);
console.log("ali object:", ali);

// Access object properties
console.log("firstName:", ali.firstName);
console.log("lastName:", ali.lastName);
console.log("age:", ali.age);
console.log(ali.height);

console.log(ali["age"]);
let s = "age";
console.log(ali[s]);

// Access array elements
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

let twoDimArr = [[1,2,3], [4,5,6]]

console.log(twoDimArr[1][1])

module.exports = { };

