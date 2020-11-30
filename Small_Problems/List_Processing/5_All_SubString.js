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
EXAMPLES ==> 

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. create empty output array
2. iterate over input string, while input string length is greater than zero
  2.1 append returnSubstrings result values to output array
  2.2 remove first char of string

function returnSubStrings to return substrings iteratively
1. create empty output array
2. split into array
3. iterate over string, push current index from end of string to output array
*/

function substrings(inputStr) {
  let output = [];
  while (inputStr) {
    output.push(returnSubstrings(inputStr));
    inputStr = inputStr.slice(1);
  }
  return output;
}

function returnSubstrings(inputStr) {
  let strings = [];
  inputStr.split('').forEach((_, idx) => {
    strings.push(inputStr.slice(0, idx + 1));
  });
  return strings;
}

console.log(substrings('abcde'));
