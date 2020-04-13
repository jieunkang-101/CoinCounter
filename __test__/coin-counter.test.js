import { CoinCounter }  from './../src/coin-counter';

describe('CoinCounter', () => {

  test('should correctly paas in through a number', () => {
    const userAmount = new CoinCounter(7.41);
    expect(CoinCounter.amount).toEqual(7.41);
  });
});