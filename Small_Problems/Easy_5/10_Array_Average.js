/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array of ints

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

function average(intsArr) {
  let average = intsArr.reduce((acc, val) => acc + val) / intsArr.length;
  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40