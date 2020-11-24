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
1. convert number to string
2. reverse the string
3. test if the reversed string is equal to the string
*/

function isPlaindromicNumber(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}
