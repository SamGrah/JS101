/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  num1 : integer : range 1 to inf
            num2 : integer : range 1 to fin

OUTPUTS ==> strings one each for operations

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==> 1. perform +, -, *, /, %, and *** on arguments

IMPLICIT RULES ==>  2. first input is leftmost operand
                    3. print operation as well as result
                    4. results must be integers
MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>         (23, 17) => 40, 6, 391, 1, 6, 141050039560662968926103

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------

*/

const readline = require('readline-sync');

let num1 = readline.question('Please enter leftmost operand: ');
let num2 = readline.question('Please enter rightmost operand: ');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);