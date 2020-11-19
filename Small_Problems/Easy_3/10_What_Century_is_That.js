/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  num : 0 to inf

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==> what about negative year?
                            - assume only positive years provided

EXPLICT RULES ==>   1. convert input num to string
                    2. append appropriate suffix

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       century(2000);        // "20th"
                  century(2001);        // "21st"
                  century(1965);        // "20th"
                  century(256);         // "3rd"
                  century(5);           // "1st"
                  century(10103);       // "102nd"
                  century(1052);        // "11th"
                  century(1127);        // "12th"
                  century(11201);       // "113th"

INVALID INPUT ==>

EDGE CASES ==>    (0) => 1st


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  string

RULESET ==> object => {'11': 'th' }


    ALGORITHM
--------------------------------------
1. declare suffix variable
2. convert year to string
2. if string length is two or less, set suffix to '1st'
3. remove last two digits from string
4. if string lenth one, prepend zero char
5. switch between possible last two digit values
  5.1 set suffix based on case
6. append suffix to string number + 1
*/

function centuryWithSuffix(number) {
  let numberString = String(number);
  let lastDigit = numberString[numberString.length - 1];
  let last2Digits = numberString[numberString.length - 2] + lastDigit;
  if ((lastDigit > 3) && (lastDigit < 10)) {
    return numberString + "th"; 
  } else if ((last2Digits > 10) && (last2Digits < 20)) {
    return numberString + "th";
  } else if (number % 10 === 0) {
    return numberString + "th";
  } else if (numberString[numberString.length - 1] === "1") {
    return numberString + "st";
  } else if (numberString[numberString.length - 1] === "2") {
    return numberString + "nd";
  } else if (numberString[numberString.length - 1] === "3") {
    return numberString + "rd";
  }
}

function century(number) {
  let centuryNum = Math.ceil(number / 100); 
  return centuryWithSuffix(centuryNum);
}