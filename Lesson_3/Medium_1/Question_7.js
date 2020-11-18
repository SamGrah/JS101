// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/////////    ANSWER   \\\\\\\\\
//NaN

//incorrect, answer is pass-by-value an not modified, console logs 42 - 8