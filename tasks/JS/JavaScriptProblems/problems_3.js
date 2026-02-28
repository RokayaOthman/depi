// ============================================
// PROBLEMS 21 - 30
// ============================================


// Problem 21: Turn a number into a string
function numberToString(num) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(numberToString());

// --------------------------------------------

// Problem 22: Return the average of numbers in an array
function calculateAverage(arr) {
    let acc = 0;
    arr.forEach(item => {
        acc += item;
    });
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0); 
    return Math.floor(sum/arr.length)
}

// Example usage:
//  console.log(calculateAverage([9,1,2,3,4]));

// --------------------------------------------

// Problem 23: Turn a string into a number
function stringToNumber(str) {
   // return parseInt(str);
   // return +str
   // return Number(str)
}

// Example usage:
 console.log(stringToNumber("50"));

// --------------------------------------------

// Problem 24: Given a number n, return an array from 1 to n
function countMonkeys(n) {
    // let arr = [];
    // for(let i = 1; i < n+1; i++) {
    //     arr.push(i);
    // }
    // return arr;

    return Array.from({length : n}, (_, i) => i + 1);
}

// Example usage:
console.log(countMonkeys(5));

// --------------------------------------------

// Problem 25: Return a personalized welcome message
function welcome(lang) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(welcome());

// --------------------------------------------

// Problem 26: Combine an array of words into one sentence
function sentenceSmash(words) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(sentenceSmash());

// --------------------------------------------

// Problem 27: Convert a digit (0-9) to its word
function switchItUp(digit) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(switchItUp());

// --------------------------------------------

// Problem 28: If bonus is true, salary × 10; else just salary
function doIGetABonus(salary, bonus) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(doIGetABonus());

// --------------------------------------------

// Problem 29: Remove all exclamation marks from a string
function removeExclamationMarks(str) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(removeExclamationMarks());

// --------------------------------------------

// Problem 30: If name starts with 'R' or 'r', return 'plays banjo'
function areYouPlayingBanjo(name) {
    // TODO: Implement this function
    // Your code here
    
}

// Example usage:
// console.log(areYouPlayingBanjo());

// --------------------------------------------
