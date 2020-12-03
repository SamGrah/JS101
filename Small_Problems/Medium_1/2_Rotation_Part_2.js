/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  two numbers

OUTPUTS ==> number?

CLARIFYTING QUESTIONS ==> 1. what if number is negative?
                              - don't consider negative numbers
                          2. what if there is only one number?
                              - 
                          3. what if non-numbers are passed?

                          4. what if number is a float?

                          5. what if there is a leading zero after rotation?


EXPLICT RULES ==>   1. rotate digits of first number argument
                    2. number of digits to rotate is based on second arg

IMPLICIT RULES ==>  3. select right most number of digits in first arg, those
                       digits form a substring
                    4. move the leftmost digit of the substring last index

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>        (123, 2) => 132

INVALID INPUT ==>

EDGE CASES ==>      (1, 1) => 1


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. convert number to string
2. split string into array
3. set charsToRotate as substring defined by 2nd argument
4. rotate the array (see below function)
5. concatenate the unrotated elements with the rotated array
6. convert array back to num
*/

function rotateRightmostDigits(number, count) {
  let numArr = number.toString().split('');
  let subArray = rotateArray(numArr.slice(-count));
  return Number(numArr.slice(0, -count).concat(subArray).join(''));
}

function rotateArray(arr) {
  return arr.slice(1).concat(arr[0]);
}

console.log(rotateRightmostDigits(1234, 2));