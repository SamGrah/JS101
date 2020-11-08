/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> string : chars separated by whitespace

OUTPUTS ==> string : any chars

CLARIFYTING QUESTIONS ==> 1. are any character sets separated by whitespace
                             considered words?
                              - yes
                          2. are all user inputs considered strings?
                              -yes
                          3. how to handle escape characters?
                              - treat escape characters a words
                          4. how to handle invalid or single word inputs
                              - return error msg

EXPLICT RULES ==> 1. identify the middle word to last word

IMPLICIT RULES ==>  2. a word is any set of characters separated from another
                       character set by whitespace
                    3. if string has even number of words, return word at index
                       length / 2 + 0.5

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ('the rabbit jumped over the') => 'jummped'
                  ('the rabbit ! jumped 1 ') => '!'
                  (' i am the rabbit') => 'the'
INVALID INPUT ==>

EDGE CASES ==>    ('i am the rabbit, mad hatter') => 'rabbit, mad'
                  ('abc \n filter') => '\n'
                  ("abc    123   it's  easy") => "it's"

    DATA STRUCTURES
--------------------------------------
INPUTS ==>  string

RULESET ==>


    ALGORITHM
--------------------------------------
1. split the string by whitespace characters
2. filter out whitespace characters
2. determine middle word postiion by rounding length / 2
*/

function middlePos(str) {
  let strArr = str.split(' ');
  let wordsArr = strArr.filter(str => Boolean(str));
  return wordsArr[Math.floor(wordsArr.length / 2)];
}

middlePos("I am the walrus");