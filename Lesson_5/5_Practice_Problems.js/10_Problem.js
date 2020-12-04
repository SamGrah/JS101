let arr = [['b', 'c', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') return subArr.slice().sort((a, b) => b - a);
  else return subArr.slice().sort((a, b) => b < a);
});

console.log(newArr);