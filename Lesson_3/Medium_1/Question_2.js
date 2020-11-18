// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

//Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

/////////    ANSWER   \\\\\\\\\
let flippedMunsters = '';
for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  if (munstersDescription[idx] > 'Z') {
    flippedMunsters += munstersDescription[idx].toUpperCase();
  } else {
    flippedMunsters += munstersDescription[idx].toLowerCase();
  }
}

flippedMunsters = `${flippedMunsters}`;
console.log(flippedMunsters);