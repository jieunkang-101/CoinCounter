import { coinCounter }  from './../src/coin-counter';

describe('coinCounter', () => {

  test('should correctly paas in through a number', () => {
    const userAmount = coinCounter("test");
    expect(userAmount).toEqual("Invalid input");
  });

  test('should determine the exact amount of change needed in quarters', () => {
    const userAmount = coinCounter(7.44);
    expect(userAmount).toEqual(29);
  });
});