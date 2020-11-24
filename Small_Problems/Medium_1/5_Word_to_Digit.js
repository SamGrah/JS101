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

*/
const numList = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero : '0'
};

function wordToDigit(message) {
  Object.entries(numList).forEach(wordInt => {
    while (message.includes(wordInt[0])) {
      message = message.replace(wordInt[0], wordInt[1]);
    }
  });
  return message;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
