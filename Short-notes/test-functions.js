const c = Math.random();


let a1 = +(prompt("Input value a1:  ", ""));
let a2 = +(prompt("Input value a2:  ", ""));
let b1 = +(prompt("Input value b1:  ", ""));
let b2 = +(prompt("Input value b2:  ", ""));

function first() {
  return a1 + a2;
}

function second() {
  return b1 + b2;
}
//will read global values instead of argument
function summary() {
  return asum + bsum + c;
}
//run each function
let asum = first();
let bsum = second();
let finalSum = summary();

alert(finalSum + " - the final sum of three actions. Random number was: " + c);
