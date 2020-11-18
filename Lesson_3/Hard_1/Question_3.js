// Given the following similar sets of code, what will each code snippet print?

// ----------------------------------------
// -------------- A -----------------------
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// ----------------------------------------
// -------------- B -----------------------
// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// ----------------------------------------
// -------------- C -----------------------
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);



/////////    ANSWER   \\\\\\\\\
/* 
This is a combo of pass-by-reference and variable shadowing. Due to the 
variable shadowing, all of the assignments in to the 'shadow variables' inside
the function defintion are destroyed when the function's stack frame is 
destroyed. The global scope variables aren't ever reassigned.
Keep in mind that `${one}` is the same as `${String(one)}`.
A =>  one is: one
      two is: two
      three is: three

The arguments are pass-by-reference, however, again, shadown variable 
assignments don't impact the global variable assignments.
a point to a new set of arrays.
B =>  one is: one
      two is: two
      three is: three

In this case, the shadow variables contain the pointers to the same 
object memory locations that the global variables do. So the objects are
mutated as a result of the function invocation
C =>  one is: two
      two is: three
      three is: one  */