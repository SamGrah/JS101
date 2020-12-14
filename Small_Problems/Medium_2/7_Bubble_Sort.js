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
1. loop over the array
3. iterate over array, for each element
  3.1 check if element to the right needs to be sorted
    3.1.1 if so, set swap flag to true
      3.1.2 swap the values
      3.1.3 set iteration index to 0
    3.1.2 if else, increment the iteration index
  3.2 if iteration index is less than array length - 1, exit loop
*/

function bubbleSort(arr) {
  let index = 0;
  while (index < (arr.length - 1)) {
    if (arr[index] < arr[index + 1]) {
      index += 1;
      continue;
    }
    [arr[index], arr[index + 1 ]] = [arr[index + 1], arr[index]];
    index = 0;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);   // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]