/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  number : integer : range ? to inf

OUTPUTS ==> integer

CLARIFYTING QUESTIONS ==> how to handle non-whole number arguments?
                            - error msg

EXPLICT RULES ==>   1. 'even' number first half length is equal to second half
                        length
                    2. if else, return twice input number

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (37) => 74
                  (44) => 44
                  (103103) => 103103
                  (107) => 214

INVALID INPUT ==>

EDGE CASES ==> ()


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  number

RULESET ==>


    ALGORITHM
--------------------------------------
1. test length of number converted to string is even num
  1.1 if so, test first half substring is equal to second half substring
   1.1.1 if so, return input
2. default return is twice input
*/

function twice(num) {
  let numStr = num.toString();
  let halfIndex = numStr.length / 2;
  if (!(halfIndex % 1) &&
      (numStr.slice(0, halfIndex) === numStr.slice(halfIndex))) return num;
  return 2 * num;
}

console.log(twice(334334));