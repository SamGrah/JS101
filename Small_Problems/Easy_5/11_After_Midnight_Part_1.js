/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  interger : -inf to +inf

OUTPUTS ==> string: 'hh:mm'

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. integer represents the difference from midnight
                    2. output is string in 'hh:mm' string format

IMPLICIT RULES ==>  3. midnight is '00:00'

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>     console.log(timeOfDay(0) === "00:00");
                console.log(timeOfDay(-3) === "23:57");
                console.log(timeOfDay(35) === "00:35");
                console.log(timeOfDay(-1437) === "00:03");
                console.log(timeOfDay(3000) === "02:00");
                console.log(timeOfDay(800) === "13:20");
                console.log(timeOfDay(-4231) === "01:29");

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. take remainder of dividing argument by 1440 (full day)
2. if negative, convert to postive mins by adding 1440, set a totalMins
3. compare to 60
    3.1 if greater than or equal to, divide by 60,
        set integer portion as timeHours
    3.2 if else, set timeHours to 0
4. subtract timeHours * 60 from argument, set at timeMins
5. convert timeHours to string and pad zeros (if necessary)
6. convert timeMins to string and pad zeros (if necessary)
*/
function timeOfDay(inputMins) {
  const MINS_IN_DAY = 1440;

  let totalMins = inputMins % MINS_IN_DAY;
  if (totalMins < 0) totalMins += MINS_IN_DAY;

  let [hours, mins] = calcHoursAndMins(totalMins);
  let hoursStr = hours.toString().padStart(2,'0');
  let minsStr = mins.toString().padStart(2,'0');

  return `${hoursStr}:${minsStr}`;
}

function calcHoursAndMins(totalMinutes) {
  const MINS_IN_HOUR = 60;
  let timeHours;
  if (totalMinutes >= MINS_IN_HOUR) {
    timeHours = Math.floor(totalMinutes / MINS_IN_HOUR);
  } else {
    timeHours = 0;
  }
  return [timeHours, totalMinutes - (timeHours * MINS_IN_HOUR)];
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");