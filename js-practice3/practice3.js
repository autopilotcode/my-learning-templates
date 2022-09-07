// //Async Code
// console.log('ASYNC CODE');

// console.log('1---------setTimeout')

// // setTimeout(() => {
// //     console.log('Timeout 2 sec');
// // }, 2000);

// setTimeout(() => {
//     console.log('Timeout is not defined (sync code always run first)');
// });

// console.log('2---------clearTimeout');

// const timerId = setTimeout(() => {
//     console.log('Asynchronous');
// });
// clearTimeout(timerId);
// //no output

// const timerId1 = setTimeout(() => {
//     console.log('Asynchronous, with 0 delay');
// })

// setTimeout(() => {
//     clearTimeout(timerId);
// }, 1); //upper block will be processed and after 1ms timeout will be cleared

// console.log('3---------set / clear interval');

// const makeCounter = () => {
//     let count = 0;

//     return () => {
//         console.log(count);
//         count += 1;
// }
// }

// const intervalId = setInterval(makeCounter(), 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000);

console.log('3-----------------------callback');
let c;

const testFunc1 = (a, b) => {
  c = a + b;
  testCallBack1(c);
};

const testCallBack1 = (c) => {
  console.log(c);
};

testFunc1(5, 5);

console.log('3---------set timeout & callback');

const main = () => {
  callback();
};

const callback = () => {
  console.log('Success - callback');
  setTimeout(callback1, 3000);
};

const callback1 = () => {
  console.log('Success - callback1');
};

setTimeout(main, 3000);

//A nested function that prints a stack trace error to the console

// function firstFunction() {
//     throw new Error ('Stack trace error');
// }

// function secondFunction() {
//     firstFunction();
// }

// function thirdFunction() {
//     secondFunction();
// }

// thirdFunction();

//-------------------Methods of arrays, own practice
//-------------------
//-------------------

console.log(
  '|||----------------forEach method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const ADULT_PERSON_year = 18;
let a = 100;
const resArrayyear = [];
const resArrayfactory = [];
const resArrayAdult = [];
const resArrayMen = [];
const resArrayWomen = [];

const arrayMethods = [
  { factory: 'John', year: 28, maxSpeed: 'male' },
  { factory: 'Ali', year: 72, maxSpeed: 'male' },
  { factory: 'July', year: 14, maxSpeed: 'female' },
  { factory: 'Lukana', year: 17, maxSpeed: 'female' },
];
console.log('Initial array is:', arrayMethods);

arrayMethods.forEach((element) => {
  resArrayyear.push((a += element.year));
  resArrayfactory.push(element.factory + ' Human');
  if (element.year >= ADULT_PERSON_year) {
    resArrayAdult.push(element.factory);
  }
  if (element.maxSpeed === 'male') {
    resArrayMen.push(element.factory);
  }
  switch (element.maxSpeed) {
    case 'female':
      resArrayWomen.push(element.factory);
      break;
  }
});
console.log('Add 100 to the year', resArrayyear);
console.log("Concatenate 'Human' to the factory:", resArrayfactory);
console.log('Filter adult people:', resArrayAdult);
console.log('Filter men:', resArrayMen);
console.log('Filter women:', resArrayWomen);

const resArrayFinal = [
  ...resArrayyear,
  ...resArrayfactory,
  ...resArrayAdult,
  ...resArrayMen,
  ...resArrayWomen,
];
console.log('Final array is (all elements from all resArrays):', resArrayFinal);

console.log(
  '|||----------------filter method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const arrayMethods1 = [
  { factory: 'Mercedes', year: 2022, maxSpeed: '213' },
  { factory: 'BMW', year: 1971, maxSpeed: '156' },
  { factory: 'Volvo', year: 1983, maxSpeed: '144' },
  { factory: 'Tesla', year: 2018, maxSpeed: '181' },
];
console.log('Initial array is:', arrayMethods1);

const arrYear = arrayMethods1.filter((el) => el.year > 1990);

console.log('Cars produced after 1990:', arrYear);

const arrMaxSpeed = [];
arrMaxSpeed.push(arrayMethods1.filter((el) => el.maxSpeed >= 170));

console.log('Cars with speed >= 170km/h:', arrMaxSpeed);

console.log(
  '|||----------------map method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const arrAnimal = [
  { type: 'bird', area: 'air', dangerous: 'low', age: 10 },
  { type: 'snake', area: 'ground', dangerous: 'high', age: 10 },
  { type: 'fish', area: 'water', dangerous: 'middle', age: 10 },
  { type: 'insect', area: 'air', dangerous: 'middle', age: 10 },
  { type: 'mammal', area: 'ground', dangerous: 'low', age: 10 },
  { type: 'bacteria', area: 'water', dangerous: 'high', age: 10 },
];

const arrDangerous = arrAnimal.map((item) => (item.age += 10));

console.log(arrDangerous);

console.log(
  '|||----------------sort method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const arrSort1 = [4, 1, 7, 2, 8, 1, 5, 9];

const arrSorted1 = arrSort1.sort((a, b) => b - a);
console.log(arrSorted1);

const arrSort2 = ['4', '1', '7', '2', '8', '1', '5', '9'];

const arrSorted2 = arrSort2.sort();
console.log(arrSorted2);

console.log(
  '|||----------------reduce method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const arrReduce = [200, 300, 400, 500, 600];

const arrReduced1 = arrReduce.reduce(
  (firstEl, currentEl) => firstEl + currentEl,
  0
);
console.log(arrReduced1);

const arrReduced2 = arrReduce.reduce(
  (firstEl, currentEl) => firstEl + currentEl,
  1000
);
console.log(arrReduced2);

const arrReduced3 = arrReduce.reduce(
  (firstEl, currentEl) => firstEl - currentEl
);
console.log(arrReduced3);

const arrReduced4 = arrReduce.reduce(
  (firstEl, currentEl) => firstEl - currentEl,
  1600
);
console.log(arrReduced4);

const arrReduceFloat = [2.87, 3.12, 4.97, 5.13, 6.34];

const arrReduced5 = arrReduceFloat.reduce(
  (firstEl, currentEl) => firstEl + Math.round(currentEl)
);
console.log(arrReduced5);

const arrReduced6 = arrReduceFloat.reduce(funcForArrReducedFloat);

function funcForArrReducedFloat(firstEl, currentEl) {
  return Math.round(firstEl) + Math.round(currentEl);
}

console.log(arrReduced6);

console.log(
  '|||----------------Array.isArray method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const arrIsTrue = [];
const arrIsFalse = {};
console.log(Array.isArray(arrIsTrue), Array.isArray(arrIsFalse));

console.log(
  '|||----------------objects and arrays in object--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const BIRTHDAY = '15.09.1940';
const MARRIAGE = '17.04.1967';
const objBase = {
  name: 'Bibersaza',
  biography: {
    junior: 'calm',
    adult: 'fast',
    middleAge: {
      education: 'high school',
      friendship: 'restricted',
      importantDates: [
        6,
        16,
        18,
        33,
        { birthday: BIRTHDAY, marriage: MARRIAGE },
      ],
    },
  },
  age: 82,
};

console.log(objBase);
console.log(objBase.biography);
console.log(objBase.biography.middleAge.education);
console.log(objBase.biography.middleAge.importantDates);
console.log(objBase.biography.middleAge.importantDates[1]);

console.log(
  objBase.biography.middleAge.importantDates[4].birthday,
  '\n',
  objBase.biography.middleAge.importantDates[4].marriage
);

console.log(
  '|||----------------string features  --------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

const lefts = 'Mary Bros';
const rights = 'Peter Paul';

let templateLiterals = lefts + rights;
let templateLiterals1 = lefts + ' ' + rights;
let templateLiterals2 = `As lefts, we know ${lefts}`;
let templateLiterals3 = 'As rights, ' + rights + ' we know';

console.log(templateLiterals);
console.log(templateLiterals.length);
console.log(templateLiterals1);
console.log(templateLiterals1.length);
console.log(templateLiterals2);
console.log(templateLiterals2.length);
console.log(templateLiterals3);
console.log(templateLiterals3.length);

//string - accessing character
console.log(templateLiterals3[0], templateLiterals3[3], templateLiterals3[18]);
console.log(
  templateLiterals3.charAt(0),
  templateLiterals3.charAt(3),
  templateLiterals3.charAt(18)
);

//toString, slice, split, reverse
const number = 7892345789;
const numberArray = number.split;
console.log(numberArray);

const numberToString = number.toString();
console.log(numberToString);

const numberSplitted = numberToString.split('');
console.log(numberSplitted);
const numberSplittedReversed = numberSplitted.reverse().join('');
console.log(numberSplittedReversed);
const numberSplittedReversedToString = numberSplittedReversed.toString();
console.log(numberSplittedReversedToString);
console.log(typeof numberSplittedReversedToString);

const numberSliced = numberToString.slice('1', '5'); //not including last argument
console.log(numberSliced);

//type coercion
// eslint-disable-next-line no-undef

console.log(
  '________________________________\n' + '------------Type coercion-------'
);
const x = '9';
const y = 8;
console.log(
  'Let variables have next values:',
  `\nx=: ${x} string`,
  `\ny=: ${y}`,
  'number',
  '\nThree variants are considered below:'
);

const res = x + y;
console.log(`1st - "(+)" str + num: ${res}`);

const res1 = Number(x) + y;
console.log(`2nd - "(+)" str-to-Number() + num:' ${res1}`);

const res2 = x * y;
console.log(`3rd - "(*)" str * number: ${res2}`);

console.log(
  '________________________________\n' + '------forEach+if and filter-----'
);

const arr1 = [null, NaN, true, false, 'random', 64];
console.log("Initial array is:'", arr1);

let newArr1 = [];
arr1.forEach((el) => {
  if (Boolean(el) === true) {
    newArr1.push(el);
  }
});
console.log('forEach: newArr1[el] === true: ', newArr1);

//--
const arrFilteredTrue = arr1.filter((el) => Boolean(el) === true);
console.log('filer: newArr1[el] === true: ', arrFilteredTrue);

const arrFilteredFalse = arr1.filter((el) => Boolean(el) === false);
console.log('filter: newArray1[el] === false: ', arrFilteredFalse);

console.log(
  '________________________________\n' + '------function return function-----'
);

function sayWord(word) {
  return () => console.log(word);
}

const sayHello = sayWord('Hello');

sayHello();

console.log(
  '________________________________\n' +
    '------confirm, prompt & number processing-----\n' +
    '------uncomment & test this code in the browser console-----'
);

//confirm returns true if OK chose, returns false if CANCEL chose

//confirm
// const resConfirm = confirm('CHECK IT');
// console.log(resConfirm);

// //prompt
// let enteredNumber = prompt('Enter the number (for float number use ".")');
//     if (isNaN(enteredNumber)) {
//       console.log('You entered string value: \'', enteredNumber, '\' it\'s a', NaN, 'type, we can\'t calculate the result for you.');
//     } else if (enteredNumber == null) {
//          console.log('CANCEL button has been pressed, entered value is:', null);
//     } else if (enteredNumber.length == 0) {
//       console.log('You entered nothing, entered value is:', NaN, 'we can\'t calculate the result for you.');
//     } else if (enteredNumber == 0) {
//   console.log('You entered number "0", we can\'t calculate the result for you.');
// }else {
//       console.log('Correct number enter!');
//       console.log('Your entered number is:', enteredNumber);
//       console.log('Math.round', Math.round(enteredNumber));
//       console.log('Sign "+"', +enteredNumber);
//       console.log('parseFloat', parseFloat(enteredNumber));
//       console.log('parseInt', parseInt(enteredNumber));
//       console.log('Math.ceil', Math.ceil(enteredNumber));
//       console.log('Math.floor', Math.floor(enteredNumber));
//     }

console.log(
  '________________________________\n' +
    '------function as object value-----\n' +
    '------function return function-----'
);

const CONST1 = 'key 3';
const CONST2 = 'key 5';
const VARIABLE1 = 45;
const VARIABLE2 = 98.98;
const VARIABLE3 = '34 string';

const obj = {
  'key 1': ($) => console.log("function in 'key 1':", $),
  key2: (x) => console.log('function in key2:', x),
  [CONST1]: (y) => console.log('function in key3:', y),
  'key 4': () => console.log("function without argument in 'key 4'."),
  [CONST2]: (_) => console.log("function called with CONST in 'key 5':", _),
  key6: {
    firstName: 'Name',
    lastName: (__) =>
      console.log('function called with object on object value key6:', __),
  },
};
console.log(obj);

obj['key 1'](VARIABLE1);
obj.key2(VARIABLE2);
obj['key 3'](VARIABLE3);
obj['key 4']();
obj['key 5'](+Math.floor(Math.random() * 1000));
obj.key6.lastName(+(Math.random() * 10).toFixed(2));

let resSum = parseFloat(Math.ceil(Math.random() * 1000));
// function funcOuter(aaa) {
const funcOuter = (aaa) => {
  return {
    return1: () => console.log('\nfunction in return1 has an argument:', aaa),
    return2: () => console.log('function in return2 has an argument:', aaa),
    return3: () => console.log('function in return3 has an argument:', aaa),
  };
};
const constFuncOuter = funcOuter(resSum);
constFuncOuter['return1']();
constFuncOuter.return2();

console.log(
  '________________________________\n' + 'number to string\n' + '------ -----'
);

const hello = 132;
console.log(hello);
console.log(typeof hello);
const newHello = hello.toString();
console.log(newHello);
console.log(typeof newHello);

console.log('________________________________\n' + '' + '------ -----');

let f;
console.log(typeof f, f);
f = 5;
console.log(typeof f, f);
f = null;
console.log('typeof of f variable is:', typeof f, `\nand it's equal to: ${f}`);

const arrD = [1, 2, 3, 4, 5];
const [first, second, ...other] = arrD;
console.log(first, second, other);

function func1() {
  let a = 1;
  console.log(a);
}
console.log(typeof true);
console.log(typeof 44);
console.log(typeof 'string');
console.log(typeof { k: 1, k1: 2 });
console.log(typeof func1);
console.log(typeof null); //object
console.log(typeof undefined);

const obj2 = { name: 'Sara', age: 61, gender: 'female' };

const func33 = (a33) => {
  console.log('1', a33 in obj2);
  func44('gender');
};

const func44 = (b44) => {
  console.log(b44 in obj2);
};
func33('age');

console.log(
  '________________________________\n' + 'instance of & this' + '------ -----'
);

const funcInst = () => {
  typeof false;
}; //meaningless function body, just for test of instanceof
console.log('funcInst instanceof Function', funcInst instanceof Function);

class MyClass {}
const c12 = new MyClass();
console.log('c12 instanceof MyClass', c12 instanceof MyClass);

class Parent {}
class MyClass1 extends Parent {}

const c14 = new MyClass1();
console.log('c14 instanceof Parent', c14 instanceof Parent);

//this

const lastName = 'Outside';

const obj3 = {
  name: 'Ann',
  lastName: 'Inside',
  funcKey: function () {
    console.log(this.lastName);
  },
  funcKey1: function () {
    console.log(lastName);
  },
};

obj3.funcKey();
obj3.funcKey1();

console.log(
  '________________________________\n' +
    'arithmetic operators, details' +
    '------ -----'
);

a = 3 + 4 + '5' + 4;
console.log(a);

c = 3 + 4;
console.log(c);
c += '5';
console.log(c);
c += 4;
console.log(c);

let d = Number('8') + Number('7') + 5;
console.log(d);

let e = 5 ** 2; //exponentiation in English
console.log(e);

//increment & decrement

let a1, c1, d1, e1;

a = c = d = e = 0;
console.log(a, c, d, e);

a1 = a++;
console.log(a1); //0
c1 = ++c;
console.log(c1); //1
d1 = d--;
console.log(d1); //0
e1 = --e;
console.log(e1); //-1

console.log(
  '________________________________\n' +
    'assignment operators, details' +
    '------ -----'
);

a = a1 = e = e1 = 0;
c = c1 = 5;
d = d1 = 20;

a += 10;
console.log(a);

a1 -= 5;
console.log(a1);

c *= 5;
console.log(c);

c1 /= 5;
console.log(c1);

d %= 3;
console.log(d);

console.log(
  '________________________________\n' +
    'assignment operators, details' +
    '------ -----'
);

a = 44;
console.log('44' == a); //true

console.log('23' != a); //true

console.log('44' === a); //false

console.log('44' !== a); //true

// eslint-disable-next-line no-undef
b = undefined;
// eslint-disable-next-line no-undef
console.log(b == null); //true
// eslint-disable-next-line no-undef
console.log(b === null); //false

// eslint-disable-next-line no-undef
b = null;
// eslint-disable-next-line no-undef
console.log(b == null); //true
// eslint-disable-next-line no-undef
console.log(b === null); //true

//NaN !== NaN //true
//NaN != NaN //true

//setTimeout inside a function
const funcSetTimeout = () => {
  console.log('Before timeout');
  setTimeout(() => console.log('After 1500 timeout'), 1500);
  setTimeout(() => console.log('After 3000 timeout'), 3000);
};
funcSetTimeout();

console.log(
  '________________________________\n' +
    'logical operators, details' +
    '------ -----'
);

// && returns first false ol the last operand
console.log('1' && null && 8); //null

console.log('1' && true && 8); //8

// || returns first true or last
console.log('1' || null || 8); //'1'

console.log(0 || NaN || undefined); //undefined

a = !false;
(a1 = !3), (c = !0);
c1 = !NaN;
console.log('Output of !false, !3, !0, !NaN are:', a, a1, c, c1);

// !! converting to boolean

const TEXT = ' - these values converted to boolean are:';
console.log(
  `!!5, !!-3, !!"string", Boolean({1: 2, 2: 3}), !![1,2,3], !!true${TEXT}\n`,
  !!5,
  !!-3,
  !!'string',
  Boolean({ 1: 2, 2: 3 }),
  !![1, 2, 3],
  !!true
); //all true
console.log(
  `!!0, !!null, Boolean(null), !!undefined, !!NaN, !!' ', !!false${TEXT}\n`,
  !!0,
  !!null,
  Boolean(null),
  !!undefined,
  !!NaN,
  !!'',
  !!false
); //all false

console.log(
  '________________________________\n' + 'operator precedence' + '------ -----'
);

a = 3;
a1 = 9;
c = 1;
c1 = ++a + a1++ + c--; //4 + 9 + 1
console.log(c1); //14

console.log(
  '________________________________\n' + 'type conversion' + '------ -----'
);

a = 876;
c = 893;
a = String(a);
c = c.toString();
console.log(a, ' - type is:', typeof a);
console.log(c, ' - type is:', typeof c);

c1 = new Date();
console.log(c1, ' - type is:', typeof c1);
c1 = Number(c1);
console.log(c1, ' - type is:', typeof c1);

a1 = Date().toString();
console.log(a1, ' - type is:', typeof a1);

d = new Date();
console.log(
  d.getDate(),
  d.getFullYear(),
  d.getMonth(),
  d.getDate(),
  d.getHours(),
  d.getMinutes(),
  d.getSeconds(),
  d.getMilliseconds(),
  d.getTime(),
  d.getDay(),
  Date.now()
);

// automatic type conversion

console.log(5 + null, '5' + null, '5' + 3, '5' - 3, '5' * 3);
//5 5null 53 2 15

console.log(
  '________________________________\n' +
    'control flow' +
    '------if statement -----'
);

a = (Math.random() * 100).toFixed(0);
c = parseInt(Math.random() * 100);
console.log(`Random number a is: ${a}\n`, `Random number b is: ${c}`);
if (a > c) {
  console.log('a > c');
} else if (a < c) {
  console.log('a < c');
} else {
  console.log("It's really strange, but a = c");
}


//season of year definer
const FIRST = 1;
const LAST = 12;

function randomGenBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const month = randomGenBetween(FIRST, LAST);
console.log(`The month number is: ${month}`);

if (month == 12 || month == 1 || month == 2) {
  console.log('Winter');
} else if (month > 2 && month < 6) {
  console.log('Spring');
} else if (month >= 6 && month < 9) {
  console.log('Summer');
} else {
  console.log('Autumn');
}



console.log(
  '________________________________\n' +
    'control flow' +
    '------ternary operator -----'
);

// a = c = 1; //uncomment for checking a == c
a = Math.floor(Math.random()*10);
c = Math.ceil(Math.random()*10);

let result = (a < c) ? 'a < c' : ((a == c) ? 'a = c' : 'a > c'); 
console.log(`a = ${a}, c = ${c}, result is: ${result}`);


//haircut master name: even days - Kat, odd days - Mary
const TEXT1 = 'Hair master name is ';
const MASTER_EVEN = 'Kat';
const MASTER_ODD = 'Mary';

d = new Date();
d = d.getDate()
console.log(d);

const hairMasterName = (d % 2 == 0) ? `${TEXT1}${MASTER_EVEN}` : `${TEXT1}${MASTER_ODD}`;
console.log(hairMasterName);
