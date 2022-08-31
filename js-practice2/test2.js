// const testBigIntInput = prompt('Input bigInt', '');

// testBigInt = +testBigIntInput;


//     console.log(typeof(testBigInt));

    const obj1 = {};
    obj1.key1 = 'true';
    obj1.key2 = 23;
    obj1.key3 = 'solo';
    
    const arr1 = [];
    arr1[0] = 'el1';
    arr1[1] = 'el2';
    arr1[2] = 'el3';
    
    const arr2 = new Array('elm1', 'elm2', 'elm3');
    
    let variable1 = arr2[0];
    
    console.log(obj1);
    console.log(obj1.key3);
    console.log(arr1);
    console.log(arr2, variable1);
    
    const obj3 = {};
    // for (let i = 1; i < 35; i++) {
    //     i1 = i.toString;
    //     obj3.i1 = i;
    // }
    obj3.key1 = 'first';
    
    obj3.key2 = 'second';
    console.log(obj3);
    
    console.log('1-----------------');
    
    const arr3 = ['Audi', 'BMW', 'Opel'];
    arr3.push('ZAZ');
    
    arr3[1] = 'Polo';
    console.log(arr3);
    
    console.log('2-----------------');
    
    function func1() {
        return 'It works.';
    }
    
    console.log(func1());
    console.log('3-----------------');

let a = b = 0;
let c = a++;
let d = ++b;
console.log(`a++ = ${c}`);
console.log(`++a = ${d}`);

console.log('4-----------------');

console.log(17 % 3 === 2); //true
console.log(17 % 3 !== 2); //false

const x = '8732648234';
console.log(typeof +x); //number

console.log('5----Back ticks support line breaks');

const string1 = 'Some';
console.log(string1 + ' string');
console.log(`${string1} 
string
new row`);

console.log('6--------TERNARY OPERATOR');
const age1 = 11;
const checkAge1 = age1 >= 18 ? 'adult' : 'minor';
console.log(checkAge1);


//ternary operator
const age2 = 65;
const checkAge2 = age2 >= 18 ? 'adult' : 'minor';
console.log(checkAge2);
console.log(typeof age2);

console.log('7-------ARROW & SELF CALLING ARROW FUNCTION');
//no curly braces
const arrow2 = () => console.log('Arrow func called with const');
arrow2();

//no curly braces & parenthesis in the end
const arrow1 = (() => console.log('Self calling function'))();


console.log('8-----------------SPREAD');

const firstArray = [1,2,3];
const secondArray = [4,5,6];
const merged = [firstArray, secondArray];
console.log(merged);
//[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

const firstArray1 = [1,2,3];
const secondArray1 = [4,5,6];
const merged1 = [...firstArray1, ...secondArray1];
console.log(merged1);
//[ 1, 2, 3, 4, 5, 6 ]
//like unpacking

//the copy (not a reference)

//creating new object by copying and changing and adding key/value pair
const user = {id: 1, firstName: 'Alice', lastName: 'Brown'};
const userCopy = {...user, lastName: 'NewBrown'};
userCopy.new = 'Added element';
console.log('user object', user);
console.log('Manually changed userCopy object\n', userCopy);

//unpacking array to function
function sum(x,y,z) {
    return x + y + z;
}

const numberArray = [1,2,3];

console.log(sum(numberArray)); //will use array as the 'X' argument
//1,2,3undefinedundefined
console.log(sum(...numberArray));//unpack array and use it as arguments for sum(x,y,z)
//6

console.log('9----REST(gather to an array ar an object)');

a = 345;
b = 987;
const [fistLetter, secondLetter] = [a, b, c, d];
console.log(fistLetter, secondLetter);//345 987

const [first, second, ...remaining] = [1,2,3,4,5,6,7];
console.log(first, second, remaining);//1 2 [ 3, 4, 5, 6, 7 ]
//---
const userObj1 = {
    id: 777,
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alicebrown@email.com'
}
//to record  to const id, value from 'id' key from userObj1
const { id } = userObj1; //
console.log(id);
///777

//to record to a few const's a few values from keys of userObj1
const {firstName, lastName, ...data} = userObj1;
console.log(firstName, lastName, data);
//Alice Brown { id: 777, email: 'alicebrown@email.com' }


console.log('10-------DEFAULT ARGUMENTS');

const printName = (firstName, lastName = 'Default') => {
    console.log(firstName, lastName);
} 

printName('John');
printName('John', 'ManualLastName');
printName('John', undefined);

console.log('11---VALUE ASSIGNMENT AND MUTATION');

const setAge = (user, age) => {
    user.age = age;
    user = {name: 'Alice', age: 40};
}

const userBob = {
    name: 'Bob',
    age: 30
}

setAge(userBob, 31); 
console.log(userBob); //{ name: 'Bob', age: 31 }

console.log('12------------CLOSURES, Random Name from array');

// arr4 = [1,2,3,4,5,6,7,8];
// console.log(arr4.length);//8
//-----------------------------


//function return object
const namesGenerator = (...items) => {
    return {
        random: () => items[Math.floor(Math.random() * items.length)],
    };
}
const names = namesGenerator('John', 'Mary', 'Alice', 'Gary', 'Peter', 'Daniel');
console.log(names.random() + ' - random name 1');

//second variant without object
//function return function
const namesGenerator2 = (...items) => {
    return () => items[Math.floor(Math.random() * items.length)]
}
const names2 = namesGenerator2('John', 'Mary', 'Alice', 'Gary', 'Peter', 'Daniel');
console.log(names2() + ' - random name 2');


console.log('13-------CLOSURES, COUNTER');

function makeCounter() {
    let count = 0;
    return {
        increment: () => count += 1,
        decrement: () => count -= 1,
        getValue:  () => count
    }
}

const counter = makeCounter();
// const counter2 = makeCounter();
// const counter3 = makeCounter();
// const counterN = makeCounter(); //each counter separated

console.log(counter.getValue());
counter.increment();
counter.increment();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue());



console.log('14-----array.forEach method');
//creates new array


//'el' - arbitrary variable (in each task here, will have different name)
const arr5 = [1,2,3,4,5];
console.log('Initial array', arr5);
arr5.forEach((el) => {
    el += 2;
    console.log('Array element + 2 equal:', el);
});


console.log('14.1-----array.filter method - creates new array');
//creates new array

const arr6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log("Initial array arr6 is", arr6);

const arr6new = arr6.filter((element1) => {
    return element1 % 2 === 0;
})
console.log("array arr6new with even elements of arr6 is:", arr6new);

const arr7 = [-2, -4, -5, 3, 4, 6, -6, 23];
console.log('Initial array:', arr7)
const arr8 = [];
const arr9 = [];

arr7.filter((item) => {
    if (item >= 0) {
        arr8.push(item);
    } else {
        arr9.push(item);
    }
})
console.log('New array with positive number:', arr8);
console.log('New array with negative number:', arr9);


const arr10 = [1,2,3,4,5,6,7];
console.log(
    arr10.filter((el) => {
    return el > 3;
})
) 

const arr11 = [1,2,3,4,5,6,7,8,9,10];
console.log(
    arr11.filter((el) => {
    return el % 2 ===0;
})
)



console.log('14.2-----map.filter method - creates new array');
//creates new array with elements of initial array, processed with function

const arr12 = [2,4,6,8,10,12,14,16];
console.log('Initial array is:', arr12);

const newArr12 = arr12.map((el) => el*el);
console.log('Mapped array (el*el) is:', newArr12);

//we are creating array, where each element is a string, created from 
//corresponding initial array element
const arr13 = arr12.map((el, index) => `[${index}]:${el}`); 
console.log('Initial array is:', arr12);
console.log('Mapped array `[${index}]:${el}` is:', arr13);



console.log('14.3-----array.sort method - modified current array');

const arr14 = [5, 9, 12, 43, 67, 2, 1, 17, 36];
console.log('Initial array is:', arr14);
console.log('Sorted array a-b:', arr14.sort((a,b,) => a - b ));
console.log('Sorted array b-a:', arr14.sort((a,b,) => b - a ));

const arr15 = ['A', 'F', 'B', 'M', 'C', 'Z', 'E'];
console.log('Initial array is:', arr15);
console.log('Sorted array:', arr15.sort());


console.log(
    '15-----array.reduce method - return a single value'
    );

const arr16 = [1, 4, -10, 68, 16, 24, 21, 8, -17];
console.log('Initial array is:', arr16);
console.log(
    'Sum of all numbers:', arr16.reduce((sum,currentNumber) => sum + currentNumber, 100)
    );
let value1 = arr16.reduce((sum,currentNumber) => sum - currentNumber, 0);
console.log('Subtract of all numbers:', value1);


const users1 = [
    {
        name: 'Alice',
        job: 'Web developer'
    },
    {
        name: 'Baga',
        job: 'Fish developer'
    },
    {
        name: 'Poli',
        job: 'Pull developer'
    }
];

console.log(
    users1.reduce((list, currentUser) => (list +=  `${currentUser.name} `), '')
);



console.log('16-----array.find & find index method - return an element');

const arr17 = [1, 4, -10, 68, 16, 24, 21, 8, -17];

console.log(
    arr17.find((item) => item > 4)
); //68
console.log(
    arr17.find((item) => item < -20)
); //undefined

console.log(
    arr17.findIndex((item) => item === 16)
); //index 4
console.log(
    arr17.findIndex((item) => item < -20)
); //index -1 (maybe not exist0)



console.log('17-----array.some/every - return boolean');

const arr18 = [1, 4, -10, 68, 16, 24, 21, 8, -17];

console.log(
arr18.some((el) => el < 0),
arr18.some((el) => typeof item === 'string'), 
 
arr18.every((el) => el < 0),
arr18.every((el) => Number.isInteger(el))
);


console.log('18-----array.chain of methods');

const arr19 = [1, 4, -10, 68, 16, 24, 21, 8, -17];

console.log(
    arr19.filter((el) => el > 16).map((el) => el +2).sort((a,b) => a - b)
);

console.log('19-----reversing a number');

const reverseNumber = (number) => {
  let numString = number.toString();
  const firstChar = numString.substring(0, 1);
  
  if (isNaN(firstChar)) {
    let arr = [];
    numString = numString.substring(1);
    arr.push(firstChar);
    numString = numString.split('').reverse().join('');
    arr.push(numString);
    return arr.join('');
  } else {
    return numString.split('').reverse().join('');
  }
};