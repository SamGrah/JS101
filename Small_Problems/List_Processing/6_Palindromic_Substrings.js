/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  string

OUTPUTS ==>  array of strings

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>   1. evaluate all possible consecutive substrings within input
                     for palindrome
                    2. return all palindrome substrings in array
                    3. palindrome determination is case sensitive, for all chars

IMPLICIT RULES ==>  4. a palindrome is when string is equivalent to reversed
                      string
                    6. single char strings aren't considered palindromes

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>    ('')


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>

CONSTRUCT ==> [[substring1], substring2]...[finalSubtring]]


    ALGORITHM
--------------------------------------
1. define function to determine all substrings, return as array
2. iterate over array, remove non-palindromic strings


substrings function
1. create empty array
2. iterate over each character in the string
  2.1 iterate for the length of string from current char to end
    2.1.1 push substring to empty array
*/

function palindromes(inputStr) {
  let substrings = getSubstrings(inputStr);
  return substrings.filter(string => {
    if (string.length < 2) return false;
    return string === string.split('').reverse().join('');
  });
}

function getSubstrings(originStr) {
  let allSubstrings = [];
  for (let index = 0; index < originStr.length; index += 1) {
    for (let subIndex = index; subIndex < originStr.length + 1; subIndex += 1) {
      allSubstrings.push(originStr.slice(index, subIndex));
    }
  }
  return allSubstrings;
}

console.log(palindromes('hello-madam-did-madam-goodbye'));