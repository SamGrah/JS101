/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> array

OUTPUTS ==> array

CLARIFYTING QUESTIONS ==>   1. is a shallow copy acceptable?
                                - yes

EXPLICT RULES ==>   1. remove last element of input array
                    2. add first element to end of array

IMPLICIT RULES ==>  3. if array is empty, return empty array
                    4. if array contains only one element, return same
                    5. if non-array is passed, return undefined

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
1.
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length < 2) return arr;
  let rotatedArr = arr.slice(1);
  rotatedArr.push(arr[0]);
  return rotatedArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
