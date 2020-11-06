/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array of strings : length 2 or greater
            object : keys =>  title
                              occupation

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==> 1. all elements of array must be displayed?
                              - yes, full name is all elements of array

                          2. how to handle invalid inputs?
                              - provide error msg

                          3. how to handle null strings?
                              - provide error msg

EXPLICT RULES ==> 1. joining string elements with " " will results in name
                  2. combine object.title with array elements

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
RULESET ==>       ('James', 'Taylor',
                   {title: 'Pro', occupation: 'Musician'}) =>
                   'Hey, James Taylor, nice to have a Pro Musican in the house.'

INVALID INPUT ==> ('James', 1,
                   {title: 'Pro', occupation: 'Musician'}) =>
                   'Hey, James Taylor, nice to have a Pro Musican in the house.'

EDGE CASES ==>    ('Taylor',
                   {title: 'Pro', occupation: 'Musician'}) =>
                   'Hey, James Taylor, nice to have a Pro Musican in the house.'


    DATA STRUCTURES
--------------------------------------
INPUTS ==> array of strings
           object

RULESET ==>


    ALGORITHM
--------------------------------------
1. define template string
  1.1 join array contents with empty space string, insert into template string
  1.2 insert object properties into template string
*/

function greetings(arr, obj) {
  return `Hey, ${arr.join(' ')}, nice to have a ${obj.title} ` +
          `${obj.occupation} in the house.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);