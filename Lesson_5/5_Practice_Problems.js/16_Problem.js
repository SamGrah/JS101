let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let newArr = arr.reduce((acc, subArray) => {
  acc[subArray[0]] = subArray[1];
  return acc;
}, {});

console.log(newArr);
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }