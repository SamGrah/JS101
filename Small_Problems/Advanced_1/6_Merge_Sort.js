function mergeSort(arr) {
  return recompose(decompose(arr)); 
}

function decompose(arr) {
  if (arr.length === 1) return arr.slice();
  return [ decompose(arr.slice(0, Math.floor(arr.length / 2))) ].concat(
         [ decompose(arr.slice(Math.floor(arr.length / 2))) ]);                 
}
  
function recompose(arr) {
  if (!Array.isArray(arr[0])) return arr;
  return merge(recompose(arr[0]), recompose(arr[1]));
}
  
function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]