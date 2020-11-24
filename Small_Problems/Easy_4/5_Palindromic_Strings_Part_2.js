/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. remove non-alphanumeric characters from str
1. create reversed array
2. iterate over reversed array
  2.1 if char is alphanumeric
    2.1.1 compare array char and string char at same index
      2.1.1.1 iterator to return false if chars aren't equal
*/

function isRealPalindrome(str) {
  let cleanedStr = str.toLowerCase().split('').filter(char => {
    return (((char >= 'a') && (char <= 'z')) || (char >= '0' && char <= '9'));
  });
  return cleanedStr.slice().reverse().join('') === cleanedStr.join('');
}

console.log(isRealPalindrome("Madam, I'm Adam"));
