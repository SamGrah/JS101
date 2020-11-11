/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  value1 : all data types and values
            value2 : all data types and values

OUTPUTS ==>  boolean

CLARIFYTING QUESTIONS ==> 1. are inputs primitive data types?
                            - yes

EXPLICT RULES ==>   1. test truthiness of inputs
                    2. determine if both input are true or both false

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (0, 1) => true
                  (' ', 0) => false
                  (NaN, 0) => false
                  ('1', 2) => true

INVALID INPUT ==>

EDGE CASES ==>  (undefined, undefined) => false
                (null, 1) => true

    DATA STRUCTURES
--------------------------------------
INPUTS ==> primitive data type

RULESET ==>


    ALGORITHM
--------------------------------------
1. test truthiness of each value
2. compare the evaluated values to each other to determine strict inequality
*/

function xor(val1, val2) {
  return !val1 !== !val2;
}

xor(false, 1);