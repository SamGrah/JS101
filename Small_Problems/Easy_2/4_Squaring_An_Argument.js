/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  base : float : range -inf to inf
            pow : integer : range 1 to inf
OUTPUTS ==>

CLARIFYTING QUESTIONS ==> 1. is the range limit for the base?
                            - no
                          2. how to handle non-number base?
                            - error message
                          3. what if base is NaN, Infinity, or -Infinity?
                            - if NaN error message
                            - if infinity compute infinities
                          4. how to handle non-integer or negative power?
                            - error message

EXPLICT RULES ==>   1. multiply input parameters
                    2. perform multiplication n times

IMPLICIT RULES ==>  2. the result returned is a number

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (2,3) => 8
                  (10,10) => 10000000000
                  (-200,4) => 1600000000
                  (-12,-12 5) => −248832

INVALID INPUT ==> (NaN, 1) => error message
                  (0, NaN) => error message
                  (1, -2) => error message
                  (1, 0) => error message

EDGE CASES ==>    (1,1) => 1
                  (0,1) => 0
                  (-Infinity, Infinity) => -Infinity
                  (-Infinity, 2) => Infinity

    DATA STRUCTURES
--------------------------------------
INPUTS ==>  number

RULESET ==>


    ALGORITHM
--------------------------------------
1. validate base
2. multiply the values
*/

function multiply(num1, num2) {
  return num1 * num2;
}

function square(base, pow) {
  if (isInvalid(base, pow)) return 'Invalid Inputs';
  if (pow === 1) return base;
  return square(multiply(base,base), pow - 1);
}

function isInvalid(base, pow) {
  if ((typeof base !== 'number') || (Number.isNaN(base))) return true;
  if (typeof pow !== 'number' || (pow % 1) || (pow < 1)) return true;
  return false;
}

square(2, 2);