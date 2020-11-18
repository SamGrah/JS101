/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string

OUTPUTS ==> strings...box

CLARIFYTING QUESTIONS ==> How to handle escape char?
                            - treat as normal string
                          How to handle trailing or leading empty space chars?
                            - ignore leading or trailing empty spaces
                          How to handle non-string inputs?
                            -error msg

EXPLICT RULES ==>   1. display input string with surrounding char strings

IMPLICIT RULES ==>  2. top/bottom strings begin/end with "+", fill with '-'
                    3. strings above/below begin/end with '|' filled with ' '
                    4. '\ ' and ' |' added to being/end of input string
                    5. Other four strings have length of input length + 4

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>         (string) =>

INVALID INPUT ==>   (0) =>


EDGE CASES ==>      ('  string ') => output same as (string)
                    ('') => empty box

    DATA STRUCTURES
--------------------------------------
INPUTS ==> string

RULESET ==> strings


    ALGORITHM
--------------------------------------
1.  validate input is string
2.  remove leading/trailing zeros
3.  define top/bottom as being/end strings concatenated with '-' of input.length
4.  define surrounding strings begining/end strings concat with ' ' of
    input.length

*/

function logInBox(str, truncate) {
  if (typeof str !== 'string') return 'logInBox() requires string input';
  let boxText = str.trim().slice(0, truncate);
  let boxTopBottom = `+-${'-'.repeat(boxText.length)}-+`;
  let boxTextAdjacent = `| ${' '.repeat(boxText.length)} |`;
  console.log(`${boxTopBottom}\n` +
              `${boxTextAdjacent}\n` +
              `| ${boxText} |\n` +
              `${boxTextAdjacent}\n` +
              `${boxTopBottom}`);
}

console.log(logInBox('Testing',4));

