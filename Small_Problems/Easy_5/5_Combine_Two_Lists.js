/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  two arrays : infinite length

OUTPUTS ==> array

CLARIFYTING QUESTIONS ==> How to handle unset items?
                            - does not need to remain set in output array
                              undefined should be included in output

EXPLICT RULES ==>   1. both arrays of equal length and non-empty
                    2. elements from both arrays alternate

IMPLICIT RULES ==>  3. first element of array is zero index of right
                       followed by zero index of left...alternating
                       with equal indces from each array

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>  [arr1, arr2] => [arr1[0], arr2[0], arr1[1], arr2[1]...etc]

RULESET ==>       ([1, 2, 3], ['a', 'b', 'c']) => [1, "a", 2, "b", 3, "c"]

INVALID INPUT ==>

EDGE CASES ==>    ([1, <1 empty item>, 2], [1, 2, 3]) =>
                  [1, 1, undefined, 2, 2, 3]


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. define empty array as interleaved
2. perform iterations equal to input array length, for each:
  1.1 append right array at iteration index to interleaved array
  1.2 append left array at iteration index to interleaved array
*/

function interleave(inputArr1, inputArr2) {
  let interleavedArr = [];
  for (let idx = 0; idx < inputArr1.length; idx += 1) {
    interleavedArr.push(inputArr1[idx], inputArr2[idx]);
  }
  return interleavedArr;
}

function interleave(inputArr1, inputArr2) {
  let interleavedArr = [];
  inputArr1.forEach((_, idx) => interleavedArr.push(inputArr1[idx],
                                                    inputArr2[idx]));
  return interleavedArr;
}