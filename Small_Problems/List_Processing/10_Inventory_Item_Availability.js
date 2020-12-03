/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

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
1. create a filtered copy of the inventory log
2. set quantityOnHand variable as zero 
3. iterate over the filtered inventory log, for each transaction
  3.1 if movement property value is 'in', add quantity value to sum
  3.2 if movement protperty value is 'out', subtract quantity value from sum
4. if sum is greater than zero, return true, else false
*/

function isItemAvailable(id, log) {
  let logOfItem = log.filter(transaction => transaction.id === id);
  let quantityOnHand = logOfItem.reduce((acc, transaction) => {
    if (transaction.movement === 'in') acc += transaction.quantity;
    else acc -= transaction.quantity;

    return acc;
  },0);

  return quantityOnHand > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));
