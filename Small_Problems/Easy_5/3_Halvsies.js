/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> array: length 0 to inf

OUTPUTS ==> array containing two arrays [[], []]

CLARIFYTING QUESTIONS ==> What if the array contains unset items, should they
                          be unset in output array?
                            - no, only their value needs to be passed, unset or
                              set not important

EXPLICT RULES ==>   1. split input array elements into two arrays
                    2. input array length is even, both arrays contain equal
                       elements
                    3. input array length is odd, middle element included in
                       output array zero index array

IMPLICIT RULES ==>  3. the lower 'half' of indices are place in the zero index
                       array and upper 'half' are placed in array at index 1

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>  arr.length = 4
              [[arr[0], arr[1]], [arr[2], arr[3]]]

RULESET ==>   halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
              halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]

INVALID INPUT ==>

EDGE CASES ==> halvsies([5]);                // [[5], []]
               halvsies([]);                 // [[], []]
               halvsies([<2 empty items>])   // [[undefined], [undefined]]

    DATA STRUCTURES
--------------------------------------
INPUTS ==> array : inputArr

RULESET ==> two arrays, firstHalf and secondHalf


    ALGORITHM
--------------------------------------
1. determine start index of second subarray based on input array length
   even-ness
2. capture subarray for first half, from zero to second subarray start
3. capture subarray for second half, from second subarray start to end
*/

function halvsies(arr) {
  let arr2Start = Math.ceil(arr.length / 2);
  return [arr.slice(0, arr2Start) , arr.slice(arr2Start)];
}