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

*/
function union(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3.filter((num, idx) => !arr3.slice(0, idx).includes(num));
}

console.log(union([1, 3, 5], [3, 5, 6, 9]));