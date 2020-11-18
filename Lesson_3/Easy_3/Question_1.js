// Write three different ways to remove all of the elements from the following
// array:

let numbers = [1, 2, 3, 4];


/////////    ANSWER   \\\\\\\\\
numbers.splice(0);
numbers.slice().map( _ => numbers.pop());
numbers.length = 0;
