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
                    2. numbers divisible by 100 are not true unless also divisible by 400 

IMPLICIT RULES ==>  

MENTAL MODEL ==>


    EXAMPLES / TEST CASES   
--------------------------------------
RULESET ==>         (10) => false
                    (200) => false
                    (96) => true
                    (200) => false
                    (1200) => true
INVALID INPUT ==>   

EDGE CASES ==>      (1) => false


    DATA STRUCTURES   
--------------------------------------
INPUTS ==> number

RULESET ==>


    ALGORITHM   
--------------------------------------
1. if parameter type if not number and number value is less than zero, return error msg
2. if remainder of parameter divided by 4 isn't 0, return false
    2.1 if remainders of parameter are zero when divided by 100 and 400. return true, else false  
*/

function isLeapYear(year) {
    if (typeof year !== 'number' || year < 1) return 'isLeap year requires number parameter of 1 or greater';
    
    let intYear = Math.floor(year);
    if (intYear % 4 === 0) {
        if (intYear % 100 !== 0) return true;
        if (intYear % 400 === 0) return true;
        return false;
    } else {
        return false;
    }
}
