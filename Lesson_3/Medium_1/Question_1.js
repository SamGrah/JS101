// For this practice problem, write a program that creates the following output
// 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

/////////    ANSWER   \\\\\\\\\
for (let spaces = 0; spaces < 10; spaces += 1) {
  console.log(' '.repeat(spaces) + 'The Flintstones Rock!');
}