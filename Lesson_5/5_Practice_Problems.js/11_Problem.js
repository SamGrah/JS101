let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let newElement = Object.assign({}, obj);
  Object.keys(newElement).forEach(prop => {
    newElement[prop] += 1;
  });
  return newElement;
});


console.log(newArr);
console.log(arr);