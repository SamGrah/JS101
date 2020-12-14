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
1. create array of length number
2. compute sum of array and square that number, set as sum1
3. conput sum of squares of array elements, set as sum2
4. subtract sum2 from sum1
*/

function sumSquareDifference(number) {
  let numArr = Array(number).fill(0);
  let squareOfSums = (numArr.reduce((acc, _, idx) => acc + idx + 1, 0)) ** 2;
  let sumOfSquares = numArr.reduce((acc, _, idx) => acc + ((idx + 1) ** 2), 0);
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(100));