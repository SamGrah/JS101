/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string of digits 0 - 9

OUTPUTS ==> number : int

CLARIFYTING QUESTIONS ==> How to handle leading zeros?
                            - leading zeros should be ignored

EXPLICT RULES ==>   1. convert string to numeric equivalent

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ('4321') => 4321
                  ('10000') => 10000
INVALID INPUT ==>

EDGE CASES ==>    ('0') => 0
                  ('00') => 0
                  ('011') => 11
                  ('0099') => 99


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  string

RULESET ==>


    ALGORITHM
--------------------------------------
1. initalize sum variable
2. iterate over the string chars, from beginning to end, for each:
  2.1 convert the numeric char to integer
  2.2 multiply integer by 10 to the power of string length - index
  2.3 add product to sum


1. convert input to uppercase letters
2. initalize sum variable
3. iterate over the string chars, from beginning to end, for each:
  3.1 convert the numeric char to integer
    3.1.1 if alpha char subtract 55, if numeric char subtract 48
  3.2 multiply integer by 10 to the power of string length - index
  3.3 add product to sum
*/

function hexadecimalToInteger(inputStr) {
  let str = inputStr.toUpperCase();
  let sum = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    let num = str.charCodeAt(idx);
    let power = Math.pow(16, str.length - 1 - idx);
    sum += ((num > 57) ? num - 55 : num - 48) * power;
  }
  return sum;
}

function stringToInteger(str) {
  let sum = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    sum += (str.charCodeAt(idx) - 48) * Math.pow(10, str.length - 1 - idx);
  }
  return sum;
}

hexadecimalToInteger('4D9f');
stringToInteger('4321');
