const var1 = Date();
console.log(`today is ${var1}`);
let result;
const CLEAR_TEXT = ', tap OK to clear Console in developer tools.';

let object1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}

console.dir(object1.key2);

function consoleClear() {
    console.clear();
}

let dateConfirm = confirm(`Do you confirm that now is ${var1}`);
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

