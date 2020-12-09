/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string

OUTPUTS ==> { lowercase: , uppercase, neither: }

CLARIFYTING QUESTIONS ==> should the results be rounded up or down to hundreths?
                            - truncated is fine

EXPLICT RULES ==>   1. calculate percentage of each lowercase, uppercase
                       neither
                    2. save results as properties of output object

IMPLICIT RULES ==>  3. each is saved as a string to the hundreths place

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==> 
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

INVALID INPUT ==>

EDGE CASES ==>
letterPercentages('AAA');
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

letterPercentages('aaa');
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. determine the percent lowercase chars in string, as percentLower
2. determine the percent uppercase chars in string, as percentUpper
3. determine the percent special chars, as percentSpecial
4. convert each to a string and round to hundreths decimal place
*/

function letterPercentages(str) {
  let lowMatches = str.match(/[a-z]/g);
  let upMatches = str.match(/[A-Z]/g);
  let percentLower = lowMatches ? ((lowMatches.length) / str.length) * 100 : 0;
  let percentUpper = upMatches ? ((upMatches.length) / str.length) * 100 : 0;
  return {
    lowercase: percentLower.toFixed(2),
    uppercase: percentUpper.toFixed(2),
    neither: (100 - percentLower - percentUpper).toFixed(2)
  };
}

console.log(letterPercentages('AbCd +Ef'));
