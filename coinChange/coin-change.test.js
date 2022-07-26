const coinChange = require('./coin-change');

test('Input: coins = [1,2,5], amount = 11 Output: 3', () => {
    let coins = [1,2,5];
    let amount = 5;
    expect(coinChange(coins, amount)).toEqual(1)
})

// test('Input: coins = [2], amount = 3 Output: -1', () => {
//     let coins = [2];
//     let amount = 3;
//     expect(coinChange(coins, amount)).toEqual(-1)
// })

// test('Input: coins = [1], amount = 0 Output: 0', () => {
//     let coins = [1];
//     let amount = 0;
//     expect(coinChange(coins, amount)).toEqual(0)
// })

