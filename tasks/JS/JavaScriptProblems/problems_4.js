// ============================================
// PROBLEMS 31 - 40
// ============================================

// Problem 31: Remove the first element from the array and return the rest
function removeFirstElement(arr) {
  arr.splice(0, 1);
  return arr;
}

// Example usage:
// console.log(removeFirstElement([5,1,2,3,4]));

// --------------------------------------------

// Problem 32: Create a loop that counts from 1 to n
function unfinishedLoop(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Example usage:
// console.log(unfinishedLoop());

// --------------------------------------------

// Problem 33: Calculate the cost of car rental with discounts
function transportationOnVacation(days, discount, rental) {
  return days * (rental - discount * rental);
}

// Example usage:
// console.log(transportationOnVacation(5,0.2,400));

// --------------------------------------------

// Problem 34: Return true if exactly one of the two inputs is true
function exclusiveXOR(a, b) {
  return a ^ b;
}

// Example usage:
// console.log(exclusiveXOR(true,false));

// --------------------------------------------

// Problem 35: Find the first number that is not +1 from the previous
function findFirstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) return arr[i + 1];
  }
  return null;
}

// Example usage:
// console.log(findFirstNonConsecutive());

// --------------------------------------------

// Problem 36: Return the volume given length, width, and height
function volumeOfCuboid(length, width, height) {
  return length * width * height;
}

// Example usage:
// console.log(volumeOfCuboid(4,8,5));

// --------------------------------------------

// Problem 37: Format a number to 2 decimal places
function formatToDecimalPlaces(num) {
  return num.tofixed(2);
}

// Example usage:
// console.log(formatToDecimalPlaces(3.14159));

// --------------------------------------------

// Problem 38: Format a number as .xx
function dollarsAndCents(value) {
  return value.toFixed(2); 
  // tofixed() always gives two digits after the dicimal , it rounds the number if there are more than two decimals
}

// Example usage:
// console.log(dollarsAndCents(1));

// --------------------------------------------

// Problem 39: Given a letter, return its position in the alphabet
function findLetterPosition(letter) {
  // chatCodeAt() method is used to find the ascii code of a letter
  return letter.toLowerCase().charCodeAt(0) - 96;
}

// Example usage:
// console.log(findLetterPosition('a'));

// --------------------------------------------

// Problem 40: If one is even and the other is odd, return true
function oppositesAttract(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Example usage:
// console.log(oppositesAttract(1,2));

// --------------------------------------------
