/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------

*/

function integerToString(num) {
  if (num === 0) return '0';
  let outputArr = [];
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    outputArr.unshift(String.fromCharCode(digit + 48));
  }
  return outputArr.join('');
}

function singedIntegerToString(num) {
  if (num < 0) return ("-" + integerToString(-num));
  if (num > 0) return ("+" + integerToString(num));
  return '0';
}

console.log(singedIntegerToString(-1200));