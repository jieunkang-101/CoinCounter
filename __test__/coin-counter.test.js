import { CoinCounter }  from './../src/coin-counter';

describe('CoinCounter', () => {

  test('should correctly paas in through a number', () => {
    const userAmount = CoinCounter("test");
    expect(userAmount).toEqual(7.41);
  });
});