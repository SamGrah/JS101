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
  let transposedArr = [];
  for (let rowIdx = 0; rowIdx < arr[0].length; rowIdx += 1) {
    transposedArr.push([]);
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      transposedArr[j].push(arr[i][j]);
    }
  }
  return transposedArr;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]