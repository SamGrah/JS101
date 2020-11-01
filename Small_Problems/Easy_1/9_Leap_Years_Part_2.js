/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> year : number : integer(?) : range 1 to inf

OUTPUTS ==> leapStatus : boolean

CLARIFYTING QUESTIONS ==>   How to handle less than zero?
                                - return error msg
                            How to handle non-number parameter?
                                - return error msg
                            How to handle non-integer parameter?
                                - round parameter down

EXPLICT RULES ==>   1. numbers divisible by 4 are true but..
                    2. numbers divisible by 100 are not true unless also
                    divisible by 400
                    3. numbers are to be compared with 1752

IMPLICIT RULES ==>  3. numbers less than 1752 are true (inclusive) regardless
                       of divisibility by 100

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>         (10) => false
                    (200) => true
                    (96) => true
                    (1200) => true
INVALID INPUT ==>

EDGE CASES ==>      (1748) => false
                    (1752) => true


    DATA STRUCTURES
--------------------------------------
INPUTS ==> number

RULESET ==>


    ALGORITHM
--------------------------------------
1. if parameter type if not number and number value is less than zero,
  return error msg
2. if remainder of parameter divided by 4 is 0 and year is less than 1752,
   then return true
3  or if remainder of parameter divided by 4 is 0
  3.1 if remainder of parameter divided by 100 isn't 0, then return true
  3.2 if remainder of parameter divided by 400 is 0, then return true
  3.3 elsewise, return false
3. elsewise, return false
*/

function isLeapYear(year) {
  let intYear = Math.floor(year);
  if ((typeof year !== 'number') || (intYear < 1)) return 'isLeapYear requires number parameter of 1 or greater';

  if ((intYear % 4 === 0) && (intYear < 1752)) {
    return true;
  } else if (intYear % 4 === 0) {
    if (intYear % 100 !== 0) return true;
    if (intYear % 400 === 0) return true;
  }
  return false;
}

isLeapYear(1752);
