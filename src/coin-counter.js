export const coinCounter = (amount) => {
  let coinPurse = {};

  if (isNaN(amount)) {
    return "Invalid input";
  }

  if (amount >= .25) {
    coinPurse.quaters = Math.floor(amount / .25);
    // amount = Math.fround(amount % .25).toPrecision(2);
    amount = parseFloat(amount % .25).toPrecision(2);
    //return coinPurse.quaters;
    return coinCounter(amount);
  }
  // else {
  //   return coinCounter(amount);
  // }

  if (amount >= .1) {
    coinPurse.dimes = Math.floor(amount / .1);
    return coinPurse.dimes;
  }


}