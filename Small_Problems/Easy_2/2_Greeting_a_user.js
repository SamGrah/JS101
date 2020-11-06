/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string: length 1 or greater?

OUTPUTS ==> string: length 1 or greater

CLARIFYTING QUESTIONS ==>   What if user enters empty string?
                                - error msg
                            What if user enters non-string?
                                - error msg
                            Does name in 'name!' represent the user input?
                                -yes

EXPLICT RULES ==> 1.greeting + input
                  2. inputs ending in '!' has different 'yell' output

IMPLICIT RULES ==> 3. greeting = 'Hello '
                   4. yell response is greeting + name + 'why are we screating'
                      all uppercase
                   5. yell response removes exclimation point

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==> string

RULESET ==> string


    ALGORITHM
--------------------------------------
1. test final character of input string is '!'
  1.1 if so, insert uppercase name into yell template string
  1.2 if not, insert name into 'standard' template string
*/

const readline = require('readline-sync');

let name = readline.question("What is your name? ");

if (name[name.length - 1] === '!') {
  let nameOnly = name.slice(0, name.length - 1).toUpperCase();
  console.log(`HELLO ${nameOnly}. WHY ARE WE SCREAMING?`);
} else {
  console.log('Hello ' + name + '.');
}