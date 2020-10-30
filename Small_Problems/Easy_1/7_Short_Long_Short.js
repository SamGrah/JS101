/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  frist : string
                range: 1 to inf
            second : string
                range: 1 to inf

OUTPUTS ==> joinedInputs : string

CLARIFYTING QUESTIONS ==>   How to handle non-string inputs? 
                                - print error msg
                            Is it correct to assume that longer is based on length?
                            for example, 'a b' is longer than 'a\nb'?
                                - correct, longer equals greater of two string length properties
    
EXPLICT RULES ==>   1. determine longer of two input strings
                    2. concat shorter + longer + shorter

IMPLICIT RULES ==>  3.  longer = greater of the two lengths
                        shorter = lesser of the two lengths

MENTAL MODEL ==>

    EXAMPLES / TEST CASES   
--------------------------------------
RULESET ==>         ('abc', 'WXYZ') => 'abcWXYZabc'
                    ('WXYZ', 'abc') => 'abcWXYZabc'
                    ('A C', 'wxyz') => 'A CwxyzA C'
                    ('&*4', 'math') => '&*4math&*4'    

INVALID INPUT ==>   (4, 'math') => error msg
                    ('math', {}) => error msg
                    ([], 'test') => error msg
                    ('test', true) => error msg
                    (undefined, 'test') => error msg

EDGE CASES ==>      ('a\nb', 'a b') => 'aba bab'


    DATA STRUCTURES   
--------------------------------------
INPUTS ==> number

RULESET ==>


    ALGORITHM   
--------------------------------------
1. if either parameter isn't of type string, return error msg
2. compare the parameter string lengths
    2.1 set the longer of the two to long and shorter of two to short
3. contatenate shorter and longer strings
*/


function shortLongShort(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Error: shortLongShort requires two strings as arguments'
    }
    
    if(str1.length > str2.length) {
        return str1 + str2 + str1;
    } else {
        return str2 + str1 + str2;
    }
}