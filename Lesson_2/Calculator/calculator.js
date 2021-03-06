const readline = require('readline-sync');
const jsonMessages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function calcResult(operation, number1, number2) {
  if (operation === '1') {
    return Number(number1) + Number(number2);
  } else if (operation === '2') {
    return Number(number1) - Number(number2);
  } else if (operation === '3') {
    return Number(number1) * Number(number2);
  } else {
    return Number(number1) / Number(number2);
  }
}

prompt(jsonMessages.welcomeMsg);
wait(1000);
console.clear();

let continueCalc = true;
do {
  console.log(jsonMessages.applicationHeader);
  prompt(jsonMessages.firstPrompt);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(jsonMessages.firstPromptErr);
    number1 = readline.question();
  }

  prompt(jsonMessages.secondPrompt);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(jsonMessages.secondPromptErr);
    number2 = readline.question();
  }

  prompt(jsonMessages.operationPrompt);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(jsonMessages.operationPromptErr);
    operation = readline.question();
  }

  let output = calcResult(operation, number1, number2);

  prompt(`This result is: ${output}\n\n`);
  prompt(jsonMessages.additionalCal);
  let newCalcResponse = readline.question().toLowerCase();

  while (!['yes', 'no'].includes(newCalcResponse)) {
    prompt(`'${newCalcResponse}' is not a valid entry, please enter 'Yes' or 'No'`);
    newCalcResponse = readline.question().toLowerCase();
  }

  continueCalc = (newCalcResponse === 'yes');
  console.clear();

} while (continueCalc);

console.log(jsonMessages.applicationHeader);
prompt('Have a nice day!');
