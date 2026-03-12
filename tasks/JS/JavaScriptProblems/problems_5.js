// ============================================
// PROBLEMS 41 - 50
// ============================================


// Problem 41: Remove trailing zeros from a number
function noZerosForHeroes(num) {
    return parseFloat(num)
    
}

// Example usage:
//console.log(noZerosForHeroes(1.50000));

// --------------------------------------------

// Problem 42: Return the average of the array elements
function getArrayMean(arr) {
    return(arr.reduce((accumulator, curr) => accumulator + curr, 0)/arr.length)
    
}

// Example usage:
// console.log(getArrayMean([3,3,3]));

// --------------------------------------------

// Problem 43: Remove all vowels from a string
function vowelRemover(str) {
    let vowels = "aeiouAEIOU";
    //return str.replace(/[aeiou]/gi  , '')
    return str.split("").filter(char => !vowels.includes(char)).join("")
}

// Example usage:
// console.log(vowelRemover("rokauaiaokkr"));

// --------------------------------------------

// Problem 44: Remove all ! from a string
function removeExclamationMarks2(str) {
    // using regex with global flag
    // return str.replace(/!/g,'')
    return str.split('!').join('') // splits the string at every ! and joins it back without them
    
}

// Example usage:
// console.log(removeExclamationMarks2("!!roka!!"));

// --------------------------------------------

// Problem 45: Reverse the characters in a string
function reverseString(str) {
   return str.split('').reverse().join('')

    
}

// Example usage:
// console.log(reverseString("ABCDEFG"));

// --------------------------------------------

// Problem 46: Multiply all elements in the array
function reduceButGrow(arr) {
    return arr.reduce((acc, curr) => acc * curr , 1)
    
}

// Example usage:
// console.log(reduceButGrow([2,3,4]));

// --------------------------------------------

// Problem 47: Return true if the string reads the same backward
function isPalindrome(str) {
    return (str === str.split('').reverse().join(''))
    
}

// Example usage:
// console.log(isPalindrome("abba"));

// --------------------------------------------

// Problem 48: Return the sum from 1 to n
function grasshopperSummation(n) {
   return(n * (n + 1)) / 2
    
}

// Example usage:
// console.log(grasshopperSummation(4));

// --------------------------------------------

// Problem 49: Return array elements as a string joined by commas
function printArrayWithCommas(arr) {
   return arr.join(',')
}

// Example usage:
// console.log(printArrayWithCommas(["roka", "koko"]));

// --------------------------------------------

// Problem 50: Sum nested array of stairs climbed per day
function howManyStairs(stairs) {
   return stairs.flat().reduce((sum, steps) => sum + steps, 0)
}

// Example usage:
// console.log(howManyStairs());

// --------------------------------------------
