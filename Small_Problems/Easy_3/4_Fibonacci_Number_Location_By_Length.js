/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>    number : integer

OUTPUTS ==>   number : integer

CLARIFYTING QUESTIONS ==> what if the no solution matches the intput digits?
                            - evaluate greater than or equal to

EXPLICT RULES ==>   1. calculate fibonnaci sequence
                    2. test fibonnaci number length against function arg

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (10) => 45
                  (16) => 74

INVALID INPUT ==>

EDGE CASES ==>    (2) => 7


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. initalize array with fibonacci seq starting [1, 1]
2. iterate until length of last element of array is equal to or greather than
   function argument
   2.1 append last sum of last two array elements to array
   2.2 check if last computed value is greater than or equal to max safet num
3. return index length minus one
*/

function findFibonacciIndexByLength(digits) {
  let fibArr = [1, 1, 2];
  let index = 2;
  while (fibArr[index].toString().length < digits) {
    fibArr.push(fibArr[index] + fibArr[index - 1]);
    index += 1;
    if (fibArr[index] >= Number.MAX_SAFE_INTEGER) {
      return 'Too many digits requested';
    }
  }
  return index + 1;
}

console.log(findFibonacciIndexByLength(16));