/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==> array, nested array

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

RULESET ==>


    ALGORITHM
--------------------------------------

*/

function buyFruit(fruitQunatities) {
  let fruitList = [];
  fruitQunatities.forEach(fruitQuantity => {
    let [fruit, quantity] = fruitQuantity;
    while (quantity) {
      fruitList.push(fruit);
      quantity -= 1;
    }
  });
  return fruitList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));