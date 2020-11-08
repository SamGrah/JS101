/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  num1 : float : range -inf to inf
            num1 : float : range -inf to inf

OUTPUTS ==>

CLARIFYTING QUESTIONS ==> 1. is the range limit for the numbers?
                            - no
                          2. how to handle non-number inputs?
                            - error message
                          3. what if input is NaN, Infinity, or -Infinity?
                            - if NaN error message
                            - if infinity return infinity

EXPLICT RULES ==>  1. multiply input parameters

IMPLICIT RULES ==> 2. the result returned is a number

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (1,1) => 1
                  (1,2) => 2
                  (200,20) => 4000
                  (-1, 1) => -1

INVALID INPUT ==> (NaN, 1) => error message
                  (0, NaN) => error message

EDGE CASES ==>    (0,0) => 0
                  (0,1) => 0
                  (-Infinity, Infinity) => -Infinity
                  (-Infinity, 0) => 0

    DATA STRUCTURES
--------------------------------------
INPUTS ==>  number

RULESET ==>


    ALGORITHM
--------------------------------------
1. validate product for type number and not NaN
2. multiply the values
*/

function multiply(num1, num2) {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number') ||
      (Number.isNaN(num1)) || (Number.isNaN(num2)) ||
      (Number.isNaN(num1 * num2))) {
    return 'Invalid Input';
  } else {
    return num1 * num2;
  }
}

console.log(multiply(5,2));