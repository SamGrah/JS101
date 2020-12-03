/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>    number

OUTPUTS ==>   number

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. for each index, from left to right, move the value that
                       index to the end of the string
                    2. this is an iterative process where the input to the
                       current iteration is the result of the last iteration

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

            1234 => 2341 => 2413

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. convert the number to string and then to array
2. for each element of the array
  2.1 remove element at index and set as valToMove
  2.2 append val to move to array
3. convert array of chars to number
*/

function maxRotation(number) {
  let numArr = number.toString().split('');
  for (let index = 0; index < numArr.length; index += 1) {
    let valToMove = numArr.splice(index, 1);
    numArr.push(valToMove);
  }
  return Number(numArr.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
