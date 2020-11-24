/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==> should Teddy's age only be integers?
                            -yes

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
let age = (max, min) => {
  let ages = [max, min].sort();
  return Math.round(Math.random() * (ages[1] - ages[0])) + ages[0];
};
console.log(`Teddy is ${age(120, 20)} years old!`);