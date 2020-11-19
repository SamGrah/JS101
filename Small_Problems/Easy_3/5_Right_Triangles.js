/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>    number : int : range 1 to inf

OUTPUTS ==>   strings : only * or blank space

CLARIFYTING QUESTIONS ==> how to handle non-whole number arguments?
                            - error msg

EXPLICT RULES ==>   1. shape of output is right triangle

IMPLICIT RULES ==>  2. hyp is on left side of triangle
                    3. output lines composed of ' ' and '*'
                    4. first line is empty

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (5)
                  (9)

INVALID INPUT ==>

EDGE CASES ==>    (1)


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  int

RULESET ==>


    ALGORITHM
--------------------------------------
1. iterate for n (input) plus one number of loops, for index 'stars', in each:
  1.1 concatenate empty string of length n-Stars to '*' string of
      length stars
  2.2 log concatenated string

*/

function triangle(treeWidth) {
  for (let stars = 0; stars <= treeWidth; stars += 1) {
    console.log(' '.repeat(treeWidth - stars) + '*'.repeat(stars));
  }
}

triangle(9);