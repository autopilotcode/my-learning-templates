//HW5
// Task #1
// Write a function - isEquals
// It should accept two arguments and returns true if first one value equals second one or false
// otherwise.
// Tip: no need for if/else clause nor ternary operator
// For example:
// isEquals(3, 3) // => true

const isEquals = (a,b) => {
    // if (a === b) {
    //     return true;
    // } else {
    //     return false;
    // }
    return a === b;
}

console.log(isEquals(3, 3));


// //Task2
// Write a function - isBigger
// It should accept two arguments and returns true if first one has greater value than second one or
// false otherwise.
// Tip: no need for if/else clause nor ternary operator
// For example:
// isBigger(5, -1) // => true
// repeat: ('приведение типов') js (type coercion)

const isBigger = (a,b) => {
    return a > b;
}

console.log(isBigger(5, -1));


