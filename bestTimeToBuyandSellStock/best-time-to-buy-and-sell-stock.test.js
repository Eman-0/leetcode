const maxProfit = require('./best-time-to-buy-and-sell-stock');

test('[7,1,5,3,6,4] = 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
})

test('[7,6,4,3,1] = 0', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
})

test('[1,6,5,7,3] = 0', () => {
    expect(maxProfit([1,6,5,7,3])).toBe(6);
})
