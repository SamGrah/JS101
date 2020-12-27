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
2. iterate over the nested arrays in the reversed array, for each nested array
  2.1 reverse the array in-place
*/

function rotate90(arr) {
  let rotatedArr = [];
  arr[0].forEach(_ => rotatedArr.push([]));

  arr.forEach(row => {
    row.forEach((element, elementIndex) => {
      rotatedArr[elementIndex].push(element);
    });
  });

  return rotatedArr.map(row => row.reverse());
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]