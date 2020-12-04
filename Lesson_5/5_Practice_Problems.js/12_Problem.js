let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => subArr.filter(val => !(val % 3)));

console.log(newArr);