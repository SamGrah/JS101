/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string : age : 0 to inf
            string:  retirementAge : 0 to infinite

            OUTPUTS ==> string

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. display year of reitrement
                    2. display years until retirement occurs

IMPLICIT RULES ==>  3. Display current year

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (30, 70) => year 2057, 40 years

INVALID INPUT ==>

EDGE CASES ==>  (0, 0) => year 2020, 0 years
                (1, 1) => year 2021, 1 years


    DATA STRUCTURES
--------------------------------------
INPUTS ==>  string

RULESET ==>


    ALGORITHM
--------------------------------------
1. read user age, convert to int
2. read retire age, convert to int
3. determine current year
4. determine years to go as retire age minus user age
5. determine retire year as current year plus years to go
*/

const readline = require('readline-sync');
let userAge = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');

let remainingYears = retireAge - userAge;
let currentYear = (new Date()).getFullYear();

console.log(
  `It's ${currentYear}. You will retire in ${currentYear + remainingYears}.` +
  `\nYou only have ${remainingYears} years of work to go!`
);
