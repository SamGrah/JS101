/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  arrary of ints
                --> arr.length 1 - inf 
                --> each element > 0

            string
                -->'s' or 'p'


OUTPUTS ==> number: int 
                --> range 0 - inf

CLARIFYTING QUESTIONS ==> How to handle invalid data type / range for elements?
                            --> issue error message
                          How to handle empty array or non-array inputs?
                            --> issue error message
                          How to handle invalid string entry?
                            --> issue error message
                          How to handle single element array?
                            --> issue error message

EXPLICT RULES ==>   1. compute sum or product of array elements
                    2. determine sum or product based on user input

IMPLICIT RULES ==>  3. array elements values used to calculate sum or product


    EXAMPLES / TEST CASES   
--------------------------------------
RULESET       ==>   ([1, 2, 7], 's') = 10
                    ([1, 2, 7]), 'p') = 14
                    ([100, 5], 's') = 15
                    ([100, 5], 'p') = 500

INVALID INPUT ==>   ([1, 0], 's') produces 'Invalid inputs error'
                    ([1], 's') produces 'Invalid inputs error'
                    ([], 'p') produces 'Invalid inputs error'
                    ([-1, 1], 's') produces 'Invalid inputs error'
                    ([1, 's'], 'p') produces 'Invalid inputs error'
                    ('m', 's') produces 'Invalid inputs error'

EDGE CASES    ==>   


    DATA STRUCTURES   
--------------------------------------
INPUTS  ==> array of ints

RULESET ==> none


    ALGORITHM   
--------------------------------------
1  convert user array input from string to array of ints 
2. validate array and 's' or 'p' string inputs
3. reduce array to aggregate value based on element values
    3.1 validate individual array elements as ints
    3.2 choose aggregation method based on user 's' or 'p' selection
*/

function sumOrProduct() {
    const rlSync = require('../modules/node_modules/readline-sync');
    
    let strArr = rlSync.question("Enter multiple values separated by a space: ").split(" ");
    let numArr = strArr.map(str => parseInt(str));
    let operator = rlSync.question("Enter 's' to compute the sum, 'p' to compute the product: ");

    if (numArr.length < 2) return console.log('Error: Invalid Value Input');
    if (operator !== 'p' && operator !== 's') return console.log('Error: Invalid Compute Input');

    let func = (operator === 'p') ? (acc, val) => acc * val : (acc, val) => acc + val;
    let aggregate = numArr.reduce(func, operator == "p" ? 1 : 0);
    if (isNaN(aggregate)) return console.log('Error: Invalid Value Input');
    console.log(`The ${operator === 'p' ? 'product' : 'sum'} of the entered values is ${aggregate}.`);
}

sumOrProduct();
