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
console.log('Let variables have next values:', `\nx=: ${x} string`, `\ny=: ${y}`, 'number', '\nThree variants are considered below:');

const res = x + y;
console.log(`1st - "(+)" str + num: ${res}`);

const res1 = Number(x) + y;
console.log(`2nd - "(+)" str-to-Number() + num:' ${res1}`);

const res2 = x * y;
console.log(`3rd - "(*)" str * number: ${res2}`);



console.log(
  '________________________________\n' + '------forEach+if and filter-----'
);

const arr1 = [null,  NaN, true, false, 'random', 64];
console.log('Initial array is:\'', arr1);

let newArr1 = [];
arr1.forEach(el => {
  if (Boolean(el) === true) {
    newArr1.push(el);
  }
}
);
console.log('forEach: newArr1[el] === true: ', newArr1);

//--
const arrFilteredTrue = arr1.filter(el => (Boolean(el) === true));
console.log('filer: newArr1[el] === true: ', arrFilteredTrue);

const arrFilteredFalse = arr1.filter(el => (Boolean(el) === false));
console.log('filter: newArray1[el] === false: ', arrFilteredFalse);

