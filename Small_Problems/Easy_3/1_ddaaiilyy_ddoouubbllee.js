/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string : any length : all chars

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==> how to handle non-string input?
                            - error msg

EXPLICT RULES ==>   1. remove consecutive characters

IMPLICIT RULES ==>  2. empty string is valid input return empty string

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ('ddaaiillyy ddoouubbllee') => "daily double"
                  ('4444abcabccba') => "4abcabcba"
                  ('ggggggggggggggg') => "g"

INVALID INPUT ==> (undefined) => err msg

EDGE CASES ==> ('a') => 'a'
               ('') => ''
               (' ', )


    DATA STRUCTURES
--------------------------------------
INPUTS ==> string

RULESET ==>


    ALGORITHM
--------------------------------------
1. convert string to array of individual chars
2. iterate over array, returning iteration result from function
  2.1 if current char is different that previous
    2.1.1 add char to output array
*/

function crunch(str) {
  let strArr = str.split('');
  return strArr.reduce((acc, char, idx, src) => {
    if (idx === 0) acc += char;
    else if (char !== src[idx - 1]) acc += char;
    return acc;
  }, '');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));