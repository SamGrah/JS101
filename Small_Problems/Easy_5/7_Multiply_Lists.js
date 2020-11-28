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
1. create an empty array as products
2. iterate over one of the arrays, for each index of the array
  2.1 multiply the two array values at that index
  2.2 push value to products array
*/

function multiplyList(inputArr1, inputArr2) {
  let products = [];
  for (let idx = 0; idx < inputArr1.length; idx += 1) {
    products.push(inputArr1[idx] * inputArr2[idx]);
  }
  return products;
}