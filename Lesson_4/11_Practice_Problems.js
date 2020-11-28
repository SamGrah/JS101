let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = flintstones.reduce((acc, val, idx) => {
  acc[val] = idx;
  return acc;
}, {});

console.log(flintstonesObj + '\n\n');


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumOfAges = Object.values(ages).reduce((acc,val) => acc + val, 0);
console.log(sumOfAges + '\n\n');


let minOfAges = Object.values(ages).reduce((acc,val) => acc < val ? acc : val);
console.log(minOfAges + '\n\n');


let statement = "The Flintstones Rock";

let letterFreq = statement.split('').reduce((acc, val) => {
  if (val !== ' ') {
    acc[val] = acc[val] || 0;
    acc[val] += 1;
  }
  return acc;
}, {})
console.log(letterFreq);