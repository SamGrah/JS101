/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  number : floating point : 0 to 360

OUTPUTS ==> string :  degrees minutes seconds

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. convert fp number to degrees, minutes, seconds
                    2. separate degrees, minutes seconds by symbols
                    3. degrees max = 360, minutes max = 60, seconds max = 60

IMPLICIT RULES ==>  4. minutes = seconds < 1 * 60
                       seconds = minutes < 1 * 60

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>       dms(30);           // 30°00'00"
                  dms(76.73);        // 76°43'48"
                  dms(254.6);        // 254°35'59"
                  dms(93.034773);    // 93°02'05"
                  dms(360);          // 360°00'00" or 0°00'00"

INVALID INPUT ==>

EDGE CASES ==>    dms(0);            // 0°00'00"


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. round to whole number, set to degrees
2. take remainder of divide by one, multiply 6000, for mintues & seconds
3. convert minutes & seconds to string
*/

const MINS_IN_DEG = 60;
const SECS_IN_MIN = 60;

function dms(num) {
  let degrees = Math.floor(num);

  let minutes = String(Math.floor((num % 1) * MINS_IN_DEG));
  if (minutes.length < 2) minutes = '0' + minutes;

  let seconds = String(Math.floor((((num % 1) *
                                    MINS_IN_DEG) % 1) *
                                   SECS_IN_MIN));
  if (seconds.length < 2) seconds = '0' + seconds;

  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(93.034773));
