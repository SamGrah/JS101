function calcTip() {
  const rlSync = require('readline-sync');
  console.log("Please enter bill amount: ");
  let billAmt = roundFloat(parseFloat(rlSync.prompt()));
  console.log("Please enter tip percentage: ");
  let tipPercent = parseFloat(rlSync.prompt());

  let tipAmt = roundFloat((billAmt * (tipPercent / 100)));
  console.log(`The tip is ${tipAmt.toFixed(2)}`)
  console.log(`The total is ${(billAmt + tipAmt).toFixed(2)}`)

  function roundFloat(num, precision) {
    return Number(num.toPrecision(precision));
  }
}

calcTip();