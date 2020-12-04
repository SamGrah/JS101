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
1. initalize nMinus1 as 1
2. initialize nMinus2 as 1
3. iterate for n loops, for each
    set nMinus1 equal to nMinus2 plus nMinus1
    set nMinus2 equal to nMinus1
4. return nMinus2
*/

function fibonnaci(n) {
  let [nMinus1, nMinus2] = [1, 1];

  let loopsRemaining = n;
  while (loopsRemaining > 2) {
    [nMinus1, nMinus2] = [nMinus1 + nMinus2, nMinus1];
    loopsRemaining -= 1;
  }

  return n > 2 ? nMinus1 : n;
}

console.log(fibonnaci(50));