//What will the following code output?

console.log(false == '0');
console.log(false === '0');


/////////    ANSWER   \\\\\\\\\

// The console will log false for both outputs
// I was wrong. Implicit coercion resulting from == should be avoided.