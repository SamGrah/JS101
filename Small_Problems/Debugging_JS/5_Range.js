function range(start, end) {
  let rangeArr = [];

  if (end === undefined) [start, end] = [0, start];

  for (let element = start; element <= end; element++) {
    rangeArr.push(element);
  }

  return rangeArr;
}

// Examples

console.log(range(10, 20));
console.log(range(5));