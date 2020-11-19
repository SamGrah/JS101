/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> string

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==> How to handle empty string?
                            return empty string
                          How to handle non-string input?
                            error msg

EXPLICT RULES ==>   1. test and replace non-alphabetic chars
                    2. replace consecutive non-alphabetic chars with single
                       empty space char
IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>         ("---what's my +*& line?") => " what s my line "

INVALID INPUT ==>

EDGE CASES ==>      ('') => ''
                    ('!!!!!') => ' '
                    (' !!!! a!!) => ' a '


    DATA STRUCTURES
--------------------------------------
INPUTS ==> string

RULESET ==>


    ALGORITHM
--------------------------------------
1. split input into array of chars
2. set output string as ''
2. iterate over array, for each
  2.1 test if current char is alpha numeric
    2.1.1 if so, push to output string
    2.1.2 if not, check if previous iteration result was empty char ' '
      2.1.2.1 if not, push empty char ' ' to output array
  2.2 return last pushed char
*/

function cleanUp(str) {
  return str.split('').reduce((acc, char) => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      acc += char;
    } else if (acc[acc.length - 1] !== ' ') {
      acc += ' ';
    }
    return acc;
  },'');
}

console.log(cleanUp(' !!!! a!!'));