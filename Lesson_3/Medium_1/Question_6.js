// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus: How can you reliably test if a value is NaN?

/////////    ANSWER   \\\\\\\\\
// false
// because NaN is an object, the comparison is being done against
// against the memory addresses of the NaN values, and they're different

// BONUS ANSWER: the Number.isNaN() function tests if a value is equal to NaN