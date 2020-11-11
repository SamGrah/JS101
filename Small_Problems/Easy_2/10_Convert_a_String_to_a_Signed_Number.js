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

function stringToInteger(str) {
  let sum = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    sum += (str.charCodeAt(idx) - 48) * Math.pow(10, str.length - 1 - idx);
  }
  return sum;
}

function stringToSignedInteger(str) {
  if (str[0] === '-') return (-1 * stringToInteger(str.slice(1)));
  if (str[0] === '+') return stringToInteger(str.slice(1));
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
