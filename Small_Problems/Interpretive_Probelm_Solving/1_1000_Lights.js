/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> number ; integer ; number of switches
                              number of passes

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==> Object = {'lightNumber': 'on/off'}


    ALGORITHM
--------------------------------------
1. create lightsStatus object with light number as property and ON/OFF as value
2. iterate from 1 to count, for each iteration
  2.1 if obtain remainder of light number divided by current iteration
  2.2 if remainder is zero, change status
*/

function lightsOn(count) {
  let lightsStatus = createLights(count);

  for (let pass = 1; pass <= count; pass += 1) {
    flipSwitches(lightsStatus, pass);
  }

  return Object.entries(lightsStatus).reduce((acc, keyVal) => {
    let [lightNo, status] = keyVal;
    if (status === 'ON') acc.push(Number(lightNo));
    return acc;
  }, []);
}

function createLights(count) {
  let lightsObj = {};
  for (let lightNo = 1; lightNo <= count; lightNo += 1) {
    lightsObj[lightNo] = 'OFF';
  }
  return lightsObj;
}

function flipSwitches(obj, pass) {
  for (let lightNo in obj) {
    if (!(Number(lightNo) % pass)) {
      if (obj[lightNo] === 'ON') obj[lightNo] = 'OFF';
      else obj[lightNo] = 'ON';
    }
  }
}


console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
