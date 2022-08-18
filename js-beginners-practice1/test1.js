const var1 = Date();
console.log(`Today is ${var1}`);
let result;
const CLEAR_TEXT = ', tap OK to clear Console in developer tools.';

let object1 = {
    key1: 'value1',
    key2: 999,
    key3: 'value3'
}
console.log('object1 has been created. It has next values:');
console.dir(object1.key2);
console.log(object1['key3']);
console.dir(object1['key1']);

let array1 = ['Fist element', 2, 3, 'Fourth element']
console.log('array1 has been created. It has next values:');
console.dir(array1[0]);
console.dir(array1[1]);
console.dir(array1[2]);
console.dir(array1[3]);

function consoleClear() {
    console.clear();
    console.log('To start from the beginning - update the page.' +
            '\nMake your choice!');
}

let dateConfirm = confirm(`Do you confirm that now is ${var1}`); //if OK is pressed, returns true
if (dateConfirm) {
    alert(`The date & time is confirmed!${CLEAR_TEXT}`);
    consoleClear();
} else {
    alert('The date & time is not confirmed. Please tap OK, to continue');
    let userDate = prompt('Enter a valid date & time:', '');
    if (userDate) {
        alert(`Your date & time variant is ${userDate}${CLEAR_TEXT}`);
        consoleClear();
    } else {
        alert(`You lost your chance${CLEAR_TEXT}`);
        consoleClear();
    }
}