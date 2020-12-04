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
1. set stack as empty array
2. set register as 0
3. define functions for each of
  n : Place a value, n, in the register. Do not modify the stack.
  PUSH
  ADD 
  SUB 
  MULT
  DIV 
  MOD 
  POP 
  PRINT
4. split input string into individual commands as array
5. iterate over array, for each
    pass into a switch case which calls the function
*/


function minilang(str) {
  let stackArr = [];
  let registerVal = 0;

  str.split(' ').some(cmd => {
    [registerVal, stackArr] = executeCommand(cmd, stackArr, registerVal);
    if ((isNaN(Number(cmd)) && (cmd !== 'PRINT')) && !stackArr.length) {
      console.log('Empty Stack Error!');
      return true;
    }
    return false;
  });

  return undefined;
}

function executeCommand(command, stack, register) {
  if (!isNaN(Number(command))) {
    register = Number(command);
  } else if (command === 'PUSH') {
    stack.push(register);
  } else if (command === 'ADD') {
    register += stack[stack.length - 1];
    stack.pop();
  } else if (command === 'SUB') {
    register -= stack[stack.length - 1];
    stack.pop();
  } else if (command === 'MULT') {
    register *= stack[stack.length - 1];
    stack.pop();
  } else if (command === 'DIV') {
    register %= stack[stack.length - 1];
    stack.pop();
  } else if (command === 'POP') {
    register = stack[stack.length - 1];
    stack.pop();
  } else if (command === 'PRINT') {
    console.log(register);
  } else {
    console.log(`INVALID TOKEN: ${command}`);
  }
  return [register, stack];
}

minilang('5 PRINT PSH 3 PRINT ADD PRINT');