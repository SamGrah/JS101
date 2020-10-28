function oddNumbers(start, end) {
  let index = start;
  while(index <= end) {
    if (index % 2) console.log(index);
    index += 1;
  }
}