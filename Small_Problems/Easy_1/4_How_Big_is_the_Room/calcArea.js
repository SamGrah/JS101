function calcArea() {
  const rlSync = require('readline-sync');
  let height = Number(rlSync.question('Please enter height: '));
  let width = Number(rlSync.question('Please enter width: '));
  let unitType = rlSync.question('Please enter unit measures as "meters" or "feet": ');

  let area = height * width;
  let defaultUnit, convertedUnit;
  if (unitType === 'meters') {
    defaultUnit = `${area.toFixed(2)} square meters `;
    convertedUnit = `(${(area * 10.7639).toFixed(2)} square feet)`;
  } else {
    defaultUnit = `${area.toFixed(2)} square feet `;
    convertedUnit = `(${(area / 10.7639).toFixed(2)} square meters)`;
  }

  console.log('The area of the room is ' + defaultUnit + convertedUnit);

}

calcArea();