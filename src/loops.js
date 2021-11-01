// https://www.w3schools.com/js/js_loop_while.asp
console.log("\n------------------- LOOPS -------------------\n");
console.log("---------------- While loop ----------------");

let counter = 0;
let number = 5;

while (counter < number) {
  console.log("counter =", counter);
  counter++;
  counter += 1;
  counter = counter + 1; // increment counter, otherwise infinite loop !!
}

console.log("---------------- while-loop with break ----------------");
// Break while-loop, if certain condition true:

counter = 0;
while (counter < number) {
  console.log("counter = ", counter);

  if (counter === 2) {
    break;
  }

  counter++;
}

while (8 < 3) {
  console.log("This won't be executed");
}

console.log("---------------- do/while loop ----------------");
do {
  console.log("\tThis code run only once");
} while (8 < 3);

console.log("---------------- for-loop ----------------");
// https://www.w3schools.com/js/js_loop_for.asp

for (let i = 0; i < 5; i++) {
  console.log("counter = ", i);
}

console.log("---------------- for-loop with continue ----------------");
// Ignore the rest of the block, if certain condition holds:

counter = 0;

for (; counter < 5; counter++) {
  if (counter === 3) {
    console.log("CONTINUE");
    continue;
  }

  console.log("counter:", counter);
}

/**
 * @Task
 countries: ["Austria", "Turkey", "France"]
 Log all countries in the console like below:
   1) Austria
   2) Turkey
 .....
*/

// let i = 0;
// let countries = ["Austria", "Turkey", "France"];

// for (; i < countries.length; i++) {
//   console.log(i + 1 + ") " + countries[i]);
// }

// i = 0;
// while (i < countries.length) {
//   console.log(i + 1 + ") " + countries[i]);
//   i++;
// }

// console.log("---------------- for/in loop ----------------")
// iterate over properties of an object

// let ali = {
//   firstName: "Ali",
//   lastName: "Veli",
//   age: 20,
// };

// for (let b in ali) {
//   console.log(b + " -> " + ali[b]);
// }


// @Task
/*
  Define an object PC and log all properties and their values
    ex: RAM = 8
    ex: CPU = "Intel Cpu i7"
*/
// console.log("@TASK: for/in loop")
// let pc = {
//   ram: 8,
//   cpu: "Intel Cpu i9",
//   gpu: "Radeon Vega",
// };

// for (let property in pc) {
//   console.log(property + " = " + pc[property]);
// }

module.exports = {};
