let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumA = a.reduce((acc, val) => (val % 2 ? acc : acc + val), 0);
  let sumB = b.reduce((acc, val) => (val % 2 ? acc : acc + val), 0);
  return sumB - sumA;
});

console.log(arr);