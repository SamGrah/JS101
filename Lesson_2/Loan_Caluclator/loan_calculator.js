/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  loanAmount : float two decimals : range 0 to inf
            annualIntRate : float - no decimal limit : range 0 to inf
            termYears : integer : 0 to inf
            termMonths : integer : 0 to inf

OUTPUTS ==> monthlyIntRate : float : range 0 to inf
            loanDuration (months) : integer : range 0 to inf
            monthlyPayment : float two decimals : range 0 to inf
            totalPayments : float two decimals : rango 0 to inf

CLARIFYTING QUESTIONS ==> How to handle invalid (non-numeric) inputs?
                            - ask user to re-enter

                          How to handle zero amount/year/months term?
                            - ask user to re-enter

                          How to handle negative values?
                            - ask user to re-enter

EXPLICT RULES ==>   1. calculate APR & # months based on formula provided

IMPLICIT RULES ==>  2. negative values are not accepted
                    3. format output values $ or % with correct deicmal (cents)

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ($120000, 5%, 1yr, 10mons) =>

INVALID INPUT ==> ('abc', 5%, 1yr, 10mons) => re-enter msg
                  ($120000, 'abc', 1yr, 10mons) => re-enter msg
                  ($120000, 5%, 'abc'', 10mons) => re-enter msg
                  ($120000, 5%, 1yr, 'abc') => re-enter msg
                  (0, 5%, 1yr, 10mons) => re-enter msg
                  (120000, 5%, 0yr, 0mons) => re-enter msg
                  (test cases above, replace 0 with -1) => re-enter msg


EDGE CASES ==>    (0.01, 5%, 1yr, 10mons) =>
                  (120000, 0%, 1yr, 10mons) =>
                  (120000, 5%, 0yr, 10mons) =>
                  (120000, 5%, 1yr, 0mons) =>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  numbers for all inputs

RULESET ==>


    ALGORITHM
--------------------------------------
1. calculate monthlyAPR as annualIntRate divided by 12
2. calculate totalTerm as 12 * termYears + termMonths
3. calculate monthlyPayment as
              loanAmount * (monthlyAPR / (1-(1 + loanAmount)^(-totalTerm)))
4. calculate totalPayments as montlyPayment * totalTerm
*/
const readline = require('readline-sync');
const jsonMessages = require("./jsonMessages.json");

function prompt(message) {
  console.log('==> ' + message);
}

function invalidInput(number, type = '') {
  if (number.trimStart() === '' || Number.isNaN(Number(number))) return true;
  if (type === 'amount' && Number(number) <= 0) {
    return true;
  } else if ((type === 'term') && (number % 1 !== 0)) {
    return true;
  } else if (Number(number) < 0) {
    return true;
  } else {
    return false;
  }
}

function userInput(queryMessage, valueType = '') {
  prompt(queryMessage, valueType);
  let number  = readline.question();
  while (invalidInput(number, valueType)) {
    prompt(`'${number}' is not a valid entry`);
    prompt(queryMessage);
    number = readline.question();
  }
  return number;
}

function formatPrice(num) {
  let numStr = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (num % 1 === 0) numStr += '.00';
  return numStr;
}

function calcMonthlyPayment(principle, monthlyIR, term) {
  let fraction = (monthlyIR / (1 - Math.pow((1 + monthlyIR), (-term))));
  return Number((principle * fraction).toFixed(2));
}

console.clear();
console.log(jsonMessages.programHeader);
console.log(jsonMessages.programDescription);

let loanAmount = userInput(jsonMessages.amountQuery, 'amount');
let amountInCents = Number(parseFloat(loanAmount).toFixed(2));

let annualIntRate = userInput(jsonMessages.aprQuery);
let monthlyAPR = (Number(annualIntRate) / 12) / 100;

let termYears, termMonths, totalTerm;
do {
  prompt(jsonMessages.termQuery);
  termYears = Number(userInput(jsonMessages.termYearsQuery, 'term'));
  termMonths = Number(userInput(jsonMessages.termMonthsQuery, 'term'));
  totalTerm = (termYears * 12) + termMonths;
  if (totalTerm === 0) prompt(jsonMessages.invaidTermMsg);
} while (totalTerm <= 0);


let monthlyPayment = calcMonthlyPayment(amountInCents, monthlyAPR, totalTerm);
let totalPayments = totalTerm * monthlyPayment;
let loanCost = Number((totalPayments - amountInCents).toFixed(2));

console.clear();
console.log(jsonMessages.programHeader);
console.log(jsonMessages.parametersHeader);
console.log(`Principle: $${formatPrice(amountInCents)}\n` +
            `APR:       ${annualIntRate}%\n` +
            `Loan Term: ${totalTerm} months`);

console.log(jsonMessages.detailsHeader);
console.log(`Monthly Payment: $${formatPrice(monthlyPayment)}\n` +
            `Monthly Rate:    ${monthlyAPR}%\n` +
            `Cost of Loan:    $${formatPrice(loanCost)}`);
