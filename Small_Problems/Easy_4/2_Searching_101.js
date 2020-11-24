/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  numbers

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
1. create empty array
2. loop six times requesting user input
  2.1 first five are pushed to empty array
  2.2 last is saved as a varaible
3. check if array includes variable
*/

let readline = require('readline-sync');
const questionTxt = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
let answers = [];

for (let idx = 0; idx <= 5; idx += 1) {
  let ans = readline.question(`Enter the ${questionTxt[idx]} number: `);
  if (idx !== 5) {
    answers.push(ans);
  } else {
    let presence = answers.includes(ans) ? 'appears' : 'does not appear';
    console.log(`The number ${ans} ${presence} in ${answers}`);
  }
}