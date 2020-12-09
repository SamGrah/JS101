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


    ALGORITHM
--------------------------------------
1. enter sides into array
2. check if angle sum is 180, 'invalid' if no
3. check if every angle is greater than zero, 'invalid' if no
4. check if one angle is 90, 'right' if so
5. check if all are less than 90, 'acute' if so
6. default return value is 'obtuse'
*/

function triangle(angle1, angle2, angle3) {
  let anglesArr = [angle1, angle2, angle3];
  if ((angle1 + angle2 + angle3) !== 180) return 'invalid';
  if (anglesArr.some(angle => angle <= 0)) return 'invalid';
  if (anglesArr.find(angle => angle === 90)) return 'right';
  if (anglesArr.every(angle => angle < 90)) return 'actue';
  return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
