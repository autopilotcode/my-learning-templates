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

// Task #3
// Write a function - storeNames
// It should accept an arbitrary number of strings and return an array of that strings
// For example:
// storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy')
// // => ['Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy']

//pseudo array arguments - read

const storeNames = (...array) => {
    return array;
}

console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy', 'Sex Pistols'));
