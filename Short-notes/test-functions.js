const c = 1300;

function first(a1, a2) {
  return a1 + a2;
}

function second(b1, b2) {
  return b1 + b2;
}
//will read global values instead of argument
function summary() {
  return asum + bsum + c;
}
//run each fucntion
let asum = first(5, 5);
let bsum = second(10, 10);
let finalSum = summary();
let answer = `${asum} + ${bsum} + ${c}`;

alert(finalSum + " - the final summ of three actions: " + answer);
