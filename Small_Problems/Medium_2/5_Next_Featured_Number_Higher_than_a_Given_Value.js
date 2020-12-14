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
1.iterate starting from input plus one to max value, for each iteration
  1.1 check if integer is divisible by 7, if not start next iteration
  1.2 check if integer is odd, if not start next iteration
  1.3 check if all digits occur only once, use separate function
      if so, return current iteration value

uniqueDigits function
1. convert number to string
2. iterate for length of string, for each char
 2.1 match string against regex for char
 2.2. if match result array is greater than 1, return false
3. return true
*/

function featured(number) {
  const largestFeaturedNum = 9876543202;
  for (let num = number + 1; num < largestFeaturedNum; num += 1) {
    if ((num % 7) || !(num % 2)) continue;
    if (uniqueDigits(num)) return num;
  }
  return 'There is no possible number that fulfills those requirements.';
}

function uniqueDigits(number) {
  let numberStr = String(number);
  for (let index = 0; index < numberStr.length; index += 1) {
    let regex = new RegExp(`${numberStr[index]}`, 'g');
    if (numberStr.match(regex).length > 1) return false;
  }
  return true;
}

console.log(featured(9876543201));