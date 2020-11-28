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
1. convert number to string
2. create empty array
3. iterate over string
  3.1 if char is numeric push to string
*/

let digitList = (number) => {
  let digitsArr = number.toString().split('');
  return digitsArr.filter(char => (char >= '0') && (char <= '9'));
};
