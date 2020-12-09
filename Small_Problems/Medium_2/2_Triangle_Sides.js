/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. check if triangle is invalid, longest side is less
                       than the sum of shorter two sides

                    2. if triangle, determine which type based on side length

IMPLICIT RULES ==>  3. if any side is zero or less, output is 'invalid'

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
1. convert inputs to array
2. if array contains zero or less side, output 'invalid'
3. if all sides are equal, output 'equalateral'
3. sort values in array from least to greatest
5. check if last two values are greater than first (is or isn't triangle)
6. check if one value occurs twice (is isosceles)
7. else output 'scalene'
*/

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3].sort((a, b) => b - a);

  if ((sidesArr[1] + sidesArr[2]) <= sidesArr[0]) return 'invalid';
  if (sidesArr.every(side => side === sidesArr[0])) return 'equalateral';
  if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return 'isocoles';
  }
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
