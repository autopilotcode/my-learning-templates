alert('Welcome to deposit calculator!' + 
'\nTap OK to start immediately!');

let moneyAmount = parseFloat(prompt('Input amount of money, that you want to invest,' +
' it should be more or equal 1000$ (don\'t use $ sign, type only a number):', ''));
while (!moneyAmount === true || moneyAmount < 1000) {
  alert('Invalid input data, tap OK and try again.');
  moneyAmount = parseFloat(prompt('Input CORRECT initial amount, that you want to invest,' +
  ' it should be more or equal 1000 (don\'t use $ sign, type only a number):', ''));
}


let depositYears = Math.round(prompt('Input desired investment period in years.' + 
' It should be an integer, one year or more (float number will be rounded):', ''));
while (!depositYears === true|| depositYears < 1) {
  alert('Invalid input data, tap OK and try again.');
  depositYears = Math.round(prompt('Input CORRECT investment period in years.' +
  ' It should be an integer, one year or more (float number will be rounded):', ''));
}

let percentageYear = parseFloat(prompt('Input percentage for your deposit per year,' +
' it should be not more than 100% (don\'t use % sign, type only a number):', ''));
while (!percentageYear === true || percentageYear > 100) {
  alert('Invalid input data, tap OK and try again.');
  percentageYear = parseFloat(prompt('Input CORRECT percentage for your deposit per year,' +
  ' it should be not more than 100% (don\'t use % sign, type only a number):', ''));
}

let totalAmount = moneyAmount;
for (let i = 0; i < depositYears; i++) {
  totalAmount = (totalAmount * (1 + percentageYear / 100)).toFixed(2);
}

let totalProfit;
totalProfit = (totalAmount - moneyAmount).toFixed(2);

//here was used two types of writing output (string + variable), just for a test purpose.
alert(
  `Your investment: ${moneyAmount}$` +
    '\nInvestment period in years: ' +
    depositYears +
    `\nPercentage per year: ${percentageYear}%` +
    '\n\nTotal amount: ' +
    totalAmount + '$' +
    `\nTotal profit: ${totalProfit}$` +
    '\n\nReload this page, to rerun the calculator!'
);

