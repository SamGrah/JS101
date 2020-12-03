/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array of ints

OUTPUTS ==> integer

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. calculate subarrays

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>
              [a, b, c] => [[a], [a, b],[a, b, c]]

    ALGORITHM
--------------------------------------
1. set sum equal to zero
1. iterate over input array
  2.1  iterate over subarray defined from start of array to current index
    2.1.1 add current element to sum
*/

function sumOfSums(inputArr) {
  let sum = 0;
  inputArr.forEach((_, idx) => {
    inputArr.slice(0, idx + 1).forEach(val => {
      sum += val;
    });
  });
  return sum;
}

console.log(sumOfSums([3, 5, 2]));
