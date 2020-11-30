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

*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(num1 => arr2.forEach(num2 => products.push(num1 * num2)));
  return products.sort((a,b) => a > b);
}

// [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));