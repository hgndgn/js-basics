let array = [1,2,3,4,5,6,7,8,9,10,11] 

console.log("-------------- TASK 1 --------------")
// Task 1
for (let i = 1; i < array.length; i += 2){
  let element = array[i]
  console.log(element)
}

console.log("\n-------------- TASK 2 --------------")
// Task 2
// --- Solution 1 (without function)
let arr = [12,423,528,91,100];


for (let i = 0; i < arr.length; i++){
  let element = arr[i]
  let rest = element % 2;

  if (rest === 0) {
    console.log("even", element)
  } else {
    console.log("odd", element)
  }
}

// --- Solution 2 (using a function)
function isEvenNumber(number) {
  const rest = number % 2;
  if (rest === 0) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < arr.length; i++){
  let element = arr[i]
  let isEven = isEvenNumber(element)

  if (isEven) {
    console.log("even", element)
  } else {
    console.log("odd", element)
  }
}
