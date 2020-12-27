/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
array
value

OUTPUTS ==>
value or number

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
1. recursively search through the array
2. for each pass, check if value is greater or less than lower or upper half of the array
3. continue search recursively until value is found or not found
4. return index of value if found, else return -1

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==> 

RULESET ==>
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>


    ALGORITHM
--------------------------------------
1. intialize localMax variable as array length - 1
2. initialize localMin varible as 0
3. establish loop
  3.1 if localMax equals localMin, break loop
  3.2 if search value is greater than the midpoint between localMax and localMin, set localMin equal to         midpoint
  3.3 else, set localMax equal to midpoint
4. if value at the localMin index of array is equal to searchValue, return localMin
5. else return -1
*/

function binarySearch(arr, searchValue) {
  let [localMin, localMax] = [0, arr.length - 1];
  while(localMin <= localMax) {
    let localMidpoint = localMin + Math.floor((localMax - localMin) / 2);
    if (arr[localMidpoint] === searchValue) return localMidpoint;
    (searchValue > arr[localMidpoint]) ? localMin = localMidpoint + 1 : localMax = localMidpoint - 1;
  }
  return -1; 
}




let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6