/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>
(1) [[0, 1]]
(3) [ [1, 1], [0, 3], [1, 1] ]
(5) [ [2, 1], [1, 3], [0, 5], [1, 3], [2, 1] ]


    ALGORITHM
--------------------------------------
1. set diamondArr as empty array and push [0, number] as sole element
2. iterate from input number - 2 down to 1, decrementing by 2
  2.1 first element of subarray is (input number minus index) / 2
  2.2 second element of subarray is index
  2.3 unshift subarray to diamond
  2.4 push subarray to diamond
3. print string for each subarray where 1st element is empty spaces
   and second element is stars
*/

function diamond(size) {
  let diamondArr = [[0, size]];

  for (let index = size - 2; index > 0; index -= 2) {
    let spacesStars = [(size - index) / 2, index];
    diamondArr.unshift(spacesStars);
    diamondArr.push(spacesStars);
  }

  diamondArr.forEach(keyVal => {
    let [spacesCount, starsCount] = keyVal;
    console.log(' '.repeat(spacesCount) + '*'.repeat(starsCount));
  });
}

diamond(5);
