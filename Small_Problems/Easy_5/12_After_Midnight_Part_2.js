/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string - 'hh:mm'

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
afterMidnight()
1. split the input string to hours and mins
2. convert each to a number
3. if hours equals 24, set hours to zero
4. convert hours to mins and add to mins

beforeMidnight()
1. pass input argument ot afterMidnight()
2. subtract 1440 from afterMidnight returned value
*/

function afterMidnight(hoursMinsStr) {
  const MINS_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  let [hours, mins] = hoursMinsStr.split(':').map(str => parseInt(str, 10));
  if (hours === HOURS_IN_DAY) hours = 0;
  return (hours * MINS_IN_HOUR) + mins;
}

function beforeMidnight(hoursMinsStr) {
  const MINS_IN_DAY = 1440;
  let minsAfter = afterMidnight(hoursMinsStr);
  return  minsAfter ? Math.abs(minsAfter - MINS_IN_DAY) : minsAfter;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
