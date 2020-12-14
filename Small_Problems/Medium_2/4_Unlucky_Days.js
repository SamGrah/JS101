/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  number : year

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. create date object set to year
2. set day to the 13th
3. set numDays equal to zero
4. iterate for number of months; for each month
 4.1 check if the day of the week is a Friday, if so, increment numDays
*/

function fridayThe13ths(year) {
  let date = new Date(`1-1-${year}`);
  date.setDate(13);
  let num13ths = 0;
  for (let month = 0; month < 12; month += 1) {
    date.setMonth(month);
    if (date.getDay() === 5) num13ths += 1;
  }
  return num13ths;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2