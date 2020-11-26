/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array : length to inf

OUTPUTS ==> integer (value within input array)

CLARIFYTING QUESTIONS ==> What about nested arrays or objects?
                            - there are none
                          What about NaN?
                            - no need to consider

EXPLICT RULES ==>   1. input is list of unordered elements
                    2. one value occurs twice, all other once
                    3. determine and return duplicate value

IMPLICIT RULES ==>  4. values are numbers (integers)
                    5. elements are only primitive values
MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==> array

RULESET ==>


    ALGORITHM
--------------------------------------
1. sort input array from least to greatest
2. iterate over array, for each element
  2.1 compare adjacent (index + 1) for each element
    2.1.1 if equal, break and return value
*/

function findDup(inputArr) {
  let sortedInputArr = inputArr.sort((num1, num2) => num1 > num2);
  return sortedInputArr.find((val, idx) => val === sortedInputArr[idx - 1]);
}
