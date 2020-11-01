/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  number: integer : range 1 to inf

OUTPUTS ==> number: integer : range 0 to inf

CLARIFYTING QUESTIONS ==> 1. What if the number is 2?
                              - return 0

EXPLICT RULES ==>   1.  the summed numbers must be between 1 and input number
                        (inclusive)
                    2.  the summed number must be a multiple of 3 OR multiple
                        of 5

IMPLICIT RULES ==>  2.

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (5) => 8
                  (10) => 28

INVALID INPUT ==>

EDGE CASES ==>  (2) => 0
                (3) => 3

    DATA STRUCTURES
--------------------------------------
INPUTS ==>  number : integer

RULESET ==>


    ALGORITHM
--------------------------------------
1. initialize a sum total with value 0
2. for an index, starting from one up to user input:
  2.1 if the index is a divisible by either 3 or 5, add index to the running
      sum total
*/


function multisum(maxVal) {
  let sum = 0;
  for (let index = 3; index <= maxVal; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}


multisum(5);
