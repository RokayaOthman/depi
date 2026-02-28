// ============================================
// PROBLEMS 11 - 20
// ============================================


// Problem 11: Return an array: [count of positives, sum of negatives]
function countPositivesSumNegatives(arr) {
    let pos = 0, neg = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 ) pos++;
        else if(arr[i] < 0) neg+=arr[i];
    }
    return [pos, neg];
    
}

// Example usage:
// console.log(countPositivesSumNegatives([1,2,-3,-5]));

// --------------------------------------------

// Problem 12: Return a string where every character is doubled
function doubleChar(str) {
    let result = '';
    str.split('').forEach(char => {
        result += char + char;
    });
    return result;   
}

// Example usage:
//console.log(doubleChar("roka"));

// --------------------------------------------

// Problem 13: Perform +, -, *, or / on two numbers
function basicMathOperations(operator, value1, value2) {
    switch(operator){
        case '+':
            return value1 + value2;

        case '-': 
            return value1 - value2;
        case '*': 
            return value1 * value2;
    }
    return 1;
}

// Example usage:
// console.log(basicMathOperations('+', 1, 2));

// --------------------------------------------

// Problem 14: Replace each number with its square root if perfect square; otherwise square it
function toSquareRootOrNot(arr) {
    return arr.map(num => {
        const sqrt = Math.sqrt(num);
        if (Number.isInteger(sqrt)){
            return sqrt;
        }
        else {  
            return num * num;
        }
    });
}

// Example usage:
// console.log(toSquareRootOrNot([1,2,3,4,5,6,7,8,16]));

// --------------------------------------------

// Problem 15: Return the first n multiples of x
function countByX(x, n) {
    let res = [];
    for(let i = 1; i <= n; i++ ){
        res.push(x * i);
    }
    return res;
}

// Example usage:
// console.log(countByX(4, 4));

// --------------------------------------------

// Problem 16: Remove all spaces from a string
function removeStringSpaces(str) {
    // TODO: Implement this function
    // Your code here
    let res = '';
    str.split('').forEach(char => {if (char !== ' ') res+= char;});
    return res;
}

// Example usage:
// console.log(removeStringSpaces('roka   ya'));

// --------------------------------------------

// Problem 17: Return an array with all values inverted in sign
function invertValues(arr) {
    return arr.map(num => -num);
}

// Example usage:
console.log(invertValues([1,2,3,4,-1,-2]));

// --------------------------------------------

// Problem 18: Convert true to 'Yes' and false to 'No'
function booleanToString(bool) {
    // TODO: Implement this function
    // Your code here
    if (bool) return 'Yes';
    else return 'No';

}

// Example usage:
// console.log(booleanToString(true));

// --------------------------------------------

// Problem 19: Reverse the order of words in a sentence
function reverseWords(str) {
    // TODO: Implement this function
    // Your code here
    return str.split(' ').reverse().join(' ');
}

// Example usage:
// console.log(reverseWords("Hello world"));
// console.log(reverseWords("The quick brown fox"));
// --------------------------------------------

// Problem 20: Return how many liters of water Nathan drinks
function keepHydrated(time) {
    // TODO: Implement this function
    // Your code here
    return Math.floor(time * 0.5);
}

// Example usage:
// console.log(keepHydrated(3));
// console.log(keepHydrated(6.7));
// console.log(keepHydrated(11.8));
// --------------------------------------------
