/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  strings (4) : 0 to inf

OUTPUTS ==> console log of string

CLARIFYTING QUESTIONS ==> how to handle empty string iput?

EXPLICT RULES ==>

IMPLICIT RULES ==>  1. user response is logged on same line as query

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
1. query user for inputs
2. insert user responses into template literal
*/

let readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter a adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?`);


