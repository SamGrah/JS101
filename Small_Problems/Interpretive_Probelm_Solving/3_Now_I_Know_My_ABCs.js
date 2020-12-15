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
EXAMPLES ==> 

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==> object
          {BO: 1, XK: 1, etc}


    ALGORITHM
--------------------------------------
1. create object where keys are dual letters each with value of 1
2. iterate over the input string, for each char
  2.1 if count of key which contains char is 1, decrement value to 0
  2.2 if count of key which contains char is 0, return false
3. return true
*/

function isBlockWord(inputWord) {
  let letterBlocks = {
    BO: 1, XK: 1, DQ: 1, CP: 1, NA: 1,
    GT: 1, RE: 1, FS: 1, JW: 1, HU: 1,
    VI: 1, LY: 1, ZM: 1
  };

  for (let index = 0; index < inputWord.length; index += 1) {
    for (let letterCombo in letterBlocks) {
      if (letterCombo.includes(inputWord[index].toUpperCase())) {
        if (letterBlocks[letterCombo] === 0) return false;
        letterBlocks[letterCombo] -= 1;
      }
    }
  }
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
