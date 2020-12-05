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
1. set fibValues as empty object
2. if fibValues length - 1 is equal to n, return fibValues[n]
3.
4. else return recurseive call passing n - 2 & n - 1
*/
let fibValues = {};

function fibonacci(num) {
  if (num <= 2) return 1;
  if (fibValues[num]) return fibValues[num];
  else fibValues[num] = fibonacci(num - 2) + fibonacci(num - 1);
  return fibValues[num];
}

console.log(fibonacci(49));

