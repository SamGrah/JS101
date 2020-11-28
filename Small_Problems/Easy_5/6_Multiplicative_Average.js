/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array of ints

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. multiply all array elements together
                    2. divide the result by the array length
                    3. round result to three decimal places
                    4. convert result string

IMPLICIT RULES ==>  5. pad zeros to three deicmal places if string doesn't
                       contain tenths, hundredths, or thousands digits

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>         ([3, 5]) => '7.500'
                    ([2, 5, 7, 11, 13, 17]) => '28361.667'
INVALID INPUT ==>

EDGE CASES ==>      ([1, 2, 0, 10]) => '0.000'
                    ([0]) => '0.000'
                    ([1]) => '1.000'


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. compute product of all array elements
2. divide product by array length
3. round quotent to thousandths place
4. convert quotent to string
5. if string doesn't include '.', then concatenate string with '.'
6. iterate until '.' is at position array length - 4
  6.1 append '0' to string
*/

function multiplicativeAverage(inputArr) {
  let average = inputArr.reduce((acc, val) => acc * val, 1) / inputArr.length;
  return average.toFixed(3);
}
