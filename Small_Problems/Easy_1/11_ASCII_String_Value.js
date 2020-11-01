/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string : length 1 to inf

OUTPUTS ==> number : int 0 to inf

CLARIFYTING QUESTIONS ==> How to non-string inputs?
                            - error msg

EXPLICT RULES ==>   1. sum ASCII values of chars in input string
                    2. value of char is determined by charCodeAt()

IMPLICIT RULES ==>  3. null string converts to value 0

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ('Four Score') => 984
                  ('Launch School') => 1251
                  ('a') => 97

INVALID INPUT ==> (5) => err msg
                  ({'num': 1}) => err msg

EDGE CASES ==>    ('') => 0


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  string

RULESET ==>


    ALGORITHM
--------------------------------------
1.  check if input is of type string, return error msg if no
2.  initialze sum with value of zero
3.  for each character in string:
  3.1 add charater ASCII value to sum
*/

function asciiValue(str) {
  if (typeof str !== 'string') {
    return 'asciiValue method requires valid string input';
  }

  let sum = 0;
  for (let index = 0; index < str.length; index += 1) {
    sum += str.charCodeAt(index);
  }
  return sum;
}

asciiValue('Four Score');
