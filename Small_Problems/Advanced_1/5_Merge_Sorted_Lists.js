/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
two arrays

OUTPUTS ==>
new array

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
1. merge the arrays
2. merged array must be sorted
3. no funciton or method can be used to sor the input array

IMPLICIT RULES ==>
4. array elemets are numbers

MENTAL MODEL ==>
merge the arrays into one


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. find min and max of both arrays
2. initialize sortedMerged as empty array
3. loop from min to max number of times, for each loop
  3.1 iterate over each input array
    3.1.1 if loop number is equal to current value, push current value to
          sortedMerged
*/

function merge(arr1, arr2) {
  let [min, max] = [ Math.min(...arr1, ...arr2), Math.max(...arr1, ...arr2) ];
  let sortedMerged = [];
  for (let value = min; value <= max; value += 1) {
    arr1.forEach(val => ((val === value) ? sortedMerged.push(val) : null));
    arr2.forEach(val => ((val === value) ? sortedMerged.push(val) : null));
  }
  return sortedMerged;
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]