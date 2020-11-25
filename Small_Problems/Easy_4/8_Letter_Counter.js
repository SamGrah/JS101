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
1. create array of words
2. create empty object
3. iterate over array, for each
  3.1 test if empty object has key equal to length of word
   3.1.1 if so, increment key value
   3.2.2 if else, create key of word length equal to word initalized to one
*/

function wordSizes(str) {
  let wordArr = str.split(' ');
  let wordCount = {};

  for (let idx = 0; idx < wordArr.length; idx += 1) {
    let wordLength = wordArr[idx].length.toString();
    if (wordCount.hasOwnProperty(wordLength)) {
      wordCount[wordLength] += 1;
    } else {
      wordCount[wordLength] = 1;
    }
  }

  return wordCount;
}

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));