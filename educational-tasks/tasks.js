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

console.log('a === b:', isEquals(3, 3));


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

console.log('a > b:', isBigger(5, -1));

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

console.log('arbitrary number of strings to array is:\n', '>>' + storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy', 'Sex Pistols'));


//my variant
// function storeNames(...array) {
//   return array;
// }

// function storeNames() {
//     return [...arguments]; ///available in non arrow f
// }

// function storeNames() {
//     return Array.from(arguments);
// }

// function storeNames() {
//     return arguments;   //not work
// }

// console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy');
// console.log(typeof storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));
// console.log(Array.isArray(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy')));





// Task #4
// Write a function - getDifference
// It should accept two arguments as numbers and return their difference. But the function never
// returns a negative value. If second parameter is greater than first one, function will change their
// order.
// For example:
// getDifference(5, 3) // => 2
// getDifference(5, 8) // => 3

const getDifference = (a,b) => {
    if (a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}

console.log('the difference is', getDifference(5, 3));
console.log('the difference is', getDifference(5, 8));


// Task #5
// Write a function - negativeCount
// It should accept an array of numbers and return the count of negative values from the array.
// For example:
// negativeCount([4, 3, 2, 9])
// // => 0
// negativeCount([0, -3, 5, 7]) // => 1

const negativeCount = (numberArray) => {
    const finalArray = [];
    for (const el of numberArray) {
        if (el < 0) {
            finalArray.push(el);
        }
    }
    return finalArray.length;
}

console.log('negative number count', negativeCount([4, 3, 2, 9]));
console.log('negative number count', negativeCount([0, -3, -5, 7]));


// Task #6
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd
// argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Marry", "r") // => 2
// letterCount("Barny", "y") // => 1
// letterCount("", "z")
// // => 0

const letterCount = (a,b) => {
    const arrayFromString = [...a];
    let letterCount = 0;
        for (const el of arrayFromString) {
            if (el === b) {
                letterCount += 1;
            }
        }
        return letterCount;
}



console.log('letterCount', letterCount("Marrrrry", "r"));
