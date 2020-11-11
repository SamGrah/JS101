/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array : length 0 - inf

OUTPUTS ==> array1 : length 1 - inf
            array2:  length 1 to inf

CLARIFYTING QUESTIONS ==> 1.how to handle non-array input?
                            - return error message
                          2. how to handle if element is array or object?
                            - return array or object

EXPLICT RULES ==>   1. filter out all even indexed elements
                    2. filter out all odd indexed elements

IMPLICIT RULES ==>  3. if input array is null, return null array

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ([1, 2, 3, 4, 5]) => []

INVALID INPUT ==> (1) => error msg

EDGE CASES ==>    ([]) => []
                  ([1]) => [1]
                           []

    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------

*/

function oddities(arr) {
  if (!Array.isArray(arr)) return 'oddities() requires an array input';
  let odds = [];
  for (let index = 0; index < arr.length; index += 2) {
    odds.push(arr[index]);
  }
  return odds;
}

let evensies = (arr) => {
  if (!Array.isArray(arr)) return 'evensies() requires an array input';
  return arr.reduce((acc, val, idx) => (idx % 2 ? acc.concat(val) : acc), []);
};

console.log(oddities([1,2,3,4]));
console.log(evensies([1,2,3,4]));
