const productExceptSelf = require('./product-except-self');

test('Input: nums = [1,2,3,4] Output: [24,12,8,6]', () => {
    let nums = [1,2,3,4];
    expect(productExceptSelf(nums)).toEqual([24,12,8,6]);
})
