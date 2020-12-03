/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> string

OUTPUTS ==> string 

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. even index chars capitalized
                    2. odd index chars lowercase
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

RULESET ==>


    ALGORITHM
--------------------------------------

*/
function staggeredCase(str, ignoreNonChars = false) {
  if (ignoreNonChars) return staggeredCaseAll(str);

  let lastAlphaProcessed = 'lower';

  let staggeredStr = str.split('').map(char => {
    let outputChar;
    if (char.match(/[a-z]/i)) {
      if (lastAlphaProcessed === 'upper') {
        outputChar = char.toLowerCase();
        lastAlphaProcessed = 'lower';
      } else {
        outputChar = char.toUpperCase();
        lastAlphaProcessed = 'upper';
      }
    } else {
      outputChar = char;
    }
    return outputChar;
  });

  return staggeredStr.join('');
}

function staggeredCaseAll(str) {
  let staggeredStr = str.split('').map((char, idx) => {
    return idx % 2 ? char.toLowerCase() : char.toUpperCase();
  });
  return staggeredStr.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
