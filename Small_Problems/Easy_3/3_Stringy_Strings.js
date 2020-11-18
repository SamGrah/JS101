/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  number : integer : length 0 to inf

OUTPUTS ==> string : length input.length

CLARIFYTING QUESTIONS ==> what if input is non-whole number?
                            - provide err msg

EXPLICT RULES ==>   1. string of length input
                    2. replace odd indices with 0
                    3. replace even indicies with 1

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (6) => '101010'
                  (11) => '10101010101'

INVALID INPUT ==> ('abc') => error msg
                  (-1) => error msg

EDGE CASES ==>    (1) => '1'
                  (0) => error msg

    DATA STRUCTURES
--------------------------------------
INPUTS ==> number

RULESET ==>


    ALGORITHM
--------------------------------------
1. validate that input is whole number > 0
2. create array filled of '1' length of input
3. iterate over array, returning '0' for each odd index
4. join array to string
*/

function stringy(num) {
  let zerosArr = new Array(num);
  zerosArr.fill('0', 0, num.length);
  let alternatingArr = zerosArr.map((char, idx) => (idx % 2 ? char : '1'));
  return alternatingArr.join('');
}

console.log(stringy(10));