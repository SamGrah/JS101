const Fraction = require('fraction.js');

function egyptian(number) {
  let value = 1;
  let egyptDenominators = []; 
  while (number > 0) {
    let fraction = Fraction(1, value);
    if (number >= fraction) {
      egyptDenominators.push(value);
      number = number.sub(fraction);
    }
    value += 1;
  }
  return egyptDenominators;
}

function unegyptian(denomArr) {
  return denomArr.reduce((acc, denominator) => {
    return acc + Fraction(1 / denominator);
  }, 0);
}


console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3


