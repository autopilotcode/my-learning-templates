//Async Code
console.log('ASYNC CODE');

console.log('1---------setTimeout')

// setTimeout(() => {
//     console.log('Timeout 2 sec');
// }, 2000);

setTimeout(() => {
    console.log('Timeout is not defined (sync code always run first)');
});


console.log('2---------clearTimeout');

const timerId = setTimeout(() => {
    console.log('Asynchronous');
});
clearTimeout(timerId);
//no output

const timerId1 = setTimeout(() => {
    console.log('Asynchronous, with 0 delay');
})

setTimeout(() => {
    clearTimeout(timerId);
}, 1); //upper block will be processed and after 1ms timeout will be cleared



console.log('3---------set / clear interval');

const makeCounter = () => {
    let count = 0;

    return () => {
        console.log(count);
        count += 1;
}
}

const intervalId = setInterval(makeCounter(), 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);

