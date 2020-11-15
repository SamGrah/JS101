//How can you determine whether a given string ends with an
//exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


/////////    ANSWER   \\\\\\\\\

let testExclaims = str => str[str.length - 1] === '!';
console.log(testExclaims(str1));
console.log(testExclaims(str2));
