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

console.log('5-----------------');

const string1 = 'Some';
console.log(string1 + ' string');
console.log(`${string1} 
string
new row`);

console.log('6-----------------');
const age1 = 11;
const checkAge1 = age1 >= 18 ? 'adult' : 'minor';
console.log(checkAge1);


//ternary operator
const age2 = 65;
const checkAge2 = age2 >= 18 ? 'adult' : 'minor';
console.log(checkAge2);
console.log(typeof age2);

console.log('7-----------------');

const arrow1 = (() => console.log('Self calling function'))();
const arrow2 = () => console.log('Arrow func called with const');
arrow2();



console.log('8-----------------SPREAD');

const firstArray = [1,2,3];
const secondArray = [4,5,6];
const merged = [firstArray, secondArray];
console.log(merged);

const firstArray1 = [1,2,3];
const secondArray1 = [4,5,6];
const merged1 = [...firstArray1, ...secondArray1];
console.log(merged1);

//the copy (not a reference)

const user = {id: 1, firstName: 'Alice', lastName: 'Brown'};
const userCopy = {...user, lastName: 'NewBrown'};
userCopy.new = 'Added element';
console.log('user object', user);
console.log('Manually changed userCopy object\n', userCopy);

//----
function sum(x,y,z) {
    return x + y + z ;
}

const numberArray = [1,2,3];

console.log(sum(numberArray)); //will use array as the 'X' argument
console.log(sum(...numberArray));//unpack array and use it as arguments for sum(x,y,z)


console.log('9-----------------REST');

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

console.log('11------------Random Name from array');

arr4 = [1,2,3,4,5,6,7,8];
console.log(arr4.length);
//-----------------------------

const namesGenerator = (...items) => {
    return {
        random: () => items[Math.floor(Math.random() * items.length)],
    };
}
const names = namesGenerator('John', 'Mary', 'Alice', 'Gary');
console.log(names.random());