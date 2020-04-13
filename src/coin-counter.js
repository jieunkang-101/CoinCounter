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

  if (amount >= .1) {
    coinPurse.dimes = Math.floor(amount / .1);
    amount = parseFloat(amount % .1).toPrecision(2);
    //return coinPurse.dimes;
    return coinCounter(amount);
  }

  if (amount >= .05) {
    coinPurse.nickels = Math.floor(amount / .05);
    amount = parseFloat(amount % .05).toPrecision(2);
    //return coinPurse.nickels;
    return coinCounter(amount);
  }

}