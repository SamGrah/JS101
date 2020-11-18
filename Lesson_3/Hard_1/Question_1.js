// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// Try to answer without running the code or looking at the solution.


/////////    ANSWER   \\\\\\\\\
// yes, the bracket is poorly placed, but JS should read both the same

// NO!! Javascript inserts semicolons when it thinks they're missing, following
// the style guide ensures that JS won't get confused and insert semicolons
// where the aren't needed