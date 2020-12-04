let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).join('').split('').forEach(char => {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) console.log(char);
});