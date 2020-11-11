/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>    number : integer

OUTPUTS ==>

CLARIFYTING QUESTIONS ==> 1. what if non-integer input?
                            - error msg
                          2. what if number is negative?
                            - error msg

EXPLICT RULES ==>   1. convert each digit to char

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (4321) => '4321'
                  (5000) => '5000'
                  (1234567890) => '1234567890'

INVALID INPUT ==>

EDGE CASES ==>    (0) => '0'
                  (00) => '0'


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------

1. create tally variable initalized to input number
2. initialize empty outputArr array
3. initalize power variable to 1
4. while tally is greater than of 10^power
  4.1 determine remainder of tally divided by 10^power to outputArr
  4.2 convert remainder to char
  4.3 unshift char to outputArr
  4.4 subtract remainder multiplied by position from tally
  4.5 increment power
5. convert outputArr to string
*/

function integerToString(num) {
  if (typeof num !== 'number' || Number.isNaN(num) || num < 0 || num % 1) {
    return "Please enter a valid integer";
  }

  if (num === 0) return '0';
  let outputArr = [];
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    outputArr.unshift(String.fromCharCode(digit + 48));
  }
  return outputArr.join('');
}

console.log(integerToString(9990));