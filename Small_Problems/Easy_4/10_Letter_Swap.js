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
1. split words into array
2. for each word in array
  2.1 if word is of length greater than one
    2.1.1 set zero index of copy string to ending char
    2.1.2 set last index of copy string to beginning char
*/

let swap = function (str) {
  let wordArr = str.split(' ');

  let idx = 0;
  while (idx < wordArr.length) {
    if (wordArr[idx].length > 1) {
      let word = wordArr[idx];
      wordArr[idx] = word.slice(-1) + word.slice(1,-1) + word.slice(0,1);
    }
    idx += 1;
  }
  return wordArr.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));
