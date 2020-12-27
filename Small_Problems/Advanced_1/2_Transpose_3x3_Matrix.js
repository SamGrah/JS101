/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
array

OUTPUTS ==>
new array

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
1 swap the values of the indices for each element
2 array passed as argument must not be mutated

IMPLICIT RULES ==>

MENTAL MODEL ==>
[[00, 01, 02],
 [10, 11, 12],
 [20, 21, 22]]

becomes

[[00, 10, 20],
 [01, 11, 21],
 [02, 12, 22]]

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
1. iterate over the first half (including middle) outer array elements where
   index is i
 1.1 iterate over the first half (including middle) nested array elements where
     index is j
    for each element of the array, swap the current element value with value of
    the element whose index is reversed ( element(i, j) swapped with
    element(j, i))
*/

function transpose(arr) {
  return arr.map((row, rowIndex) => {
    return row.map((_, elementIndex) => arr[elementIndex][rowIndex]);
  });
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]