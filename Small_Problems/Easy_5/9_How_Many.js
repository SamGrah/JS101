/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>  array of strings

OUTPUTS ==> string

CLARIFYTING QUESTIONS ==> Is this case sensitive?
                            no, 'SUV' equals 'suv'

EXPLICT RULES ==>   1. count number of occurances of each unique word
                    2. output string for each unique word with its count

IMPLICIT RULES ==>  3. each unique word is is string of 'word => count'

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==> countOccurrences(['car', 'car', 'truck', 'car', 'SUV', 'truck',
                               'motorcycle', 'motorcycle', 'car', 'truck'];)

             console output
                car => 4
                truck => 3
                SUV => 1
                motorcycle => 2

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==> array

RULESET ==> Object = {unique_element : count}


    ALGORITHM
--------------------------------------
1. convert all input array elements to lowercase
2. create empty object named vehicleCounts
3. iterate over all input array elements
  3.1 if array element isn't a property of vehicleCounts, add as property
  3.2 increment element/property
4. display object keys/values (separate function)
  4.1 iterate over all keys/values, print each in template literal format
*/

function countOccurrences(vehicleTypes) {
  vehicleTypes = vehicleTypes.map(str => str.toLowerCase());

  let vehicleCounts = {};
  vehicleTypes.forEach(str => {
    vehicleCounts[str] = vehicleCounts[str] || 0;
    vehicleCounts[str] += 1;
  });

  logVehicleCounts(vehicleCounts);
}

function logVehicleCounts(countsObj) {
  let counts = Object.entries(countsObj);
  counts.forEach(keyValue => console.log(`${keyValue[0]} => ${keyValue[1]}`));
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);
