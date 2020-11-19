/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  3 numbers : float

OUTPUTS ==> char [A, B, C, D, E]

CLARIFYTING QUESTIONS ==> how to handle out of range numbers?
                            error message

EXPLICT RULES ==>   1. calculate average of three num inputs
                    2. use average to determine letter grade based on provided
                       ranges
IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       (95, 90, 93) => 'A'
                  (50, 50, 95) => "D"
                  (1, 1, 1) => 'F'
INVALID INPUT ==>

EDGE CASES ==>    (0, 0, 0) => 0 ~ 'F'
                  (60, 60, 60) => 'F'
                  (100, 100, 100) => 'A'

    DATA STRUCTURES
--------------------------------------
INPUTS ==>  number(s)

RULESET ==> {letter grade: {lowBound: , upperBound: }


    ALGORITHM
--------------------------------------
1. calculate the average of three inputs
2. iterate over object, for each properties
    2.1 if average is between property upper and lower bounds, return key/grade
*/

function getGrade(grade1, grade2, grade3) {
  let letterGrades = {
    A : { lowerBound: 90, upperBound: 101 },
    B : { lowerBound: 80, upperBound: 90 },
    C : { lowerBound: 70, upperBound: 80 },
    D : { lowerBound: 60, upperBound: 70 },
    E : { lowerBound: 0, upperBound: 60 }
  };
  let avg = Math.round((grade1 + grade2 + grade3) / 3);
  for (let grade in letterGrades) {
    if ((letterGrades[grade].lowerBound <= avg) &&
        (avg < letterGrades[grade].upperBound)) {
      return grade;
    }
  }
}

console.log(getGrade(60, 60, 60));
