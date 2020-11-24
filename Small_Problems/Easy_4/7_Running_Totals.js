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
1. iterate over the input array, for each element
  1.1 if first element, push to empty output array
  1.2 otherwise add each element to the previous elemement and push to array
*/

let runningTotal = (arr) => {
  return arr.reduce((acc, num, idx) => {
    return (idx ? acc.concat(acc[acc.length - 1] + num) : acc.concat(num));
  },[]);
};

console.log(runningTotal([14, 11, 7, 15, 20]));

