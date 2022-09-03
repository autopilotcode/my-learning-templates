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

arrayMethods = [
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
  '|||----------------map method--------------------|||' +
    '\n-----------------------------------------------------' +
    '\n-----------------------------------------------------'
);

arrayMethods1 = [
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

