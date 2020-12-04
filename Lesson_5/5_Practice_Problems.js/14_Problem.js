let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let outputArr = [];
for (let prop in obj) {
  if (obj[prop].type === 'fruit') outputArr.push(obj[prop].colors);
  else outputArr.push(obj[prop].size.toUpperCase());
}

console.log(outputArr);