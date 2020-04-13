export const coinCounter = (amount) => {
  let coinPurse = {};

  if (isNaN(amount)) {
    return "Invalid input";
  }

  if (amount >= .25) {
    coinPurse.quaters = Math.floor(amount / .25);
    // amount = Math.fround(amount % .25).toPrecision(2);
    amount = parseFloat(amount % .25).toPrecision(2);
    return coinPurse.quaters;
  }


}