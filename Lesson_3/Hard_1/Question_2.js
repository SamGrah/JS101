// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);


/////////    ANSWER   \\\\\\\\\
/* { first: [1, 2] }
The assignment of object['first'] to numArray result in numArray referencing
the memory location at which the array within object.first is stored. Since
both object.first and numArray point to [1], a mutation via either variable 
name will affect the other. */