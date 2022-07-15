const maxSubArray = require('./maximum-subarray');

test('Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6', () => {
    nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubArray(nums)).toBe(6);
})

test('Input: nums = [5,4,-1,7,8] Output: 23', () => {
    nums = [5,4,-1,7,8];
    expect(maxSubArray(nums)).toBe(23);
})

test('Input: nums = [] Output: 0', () => {
    nums = [];
    expect(maxSubArray(nums)).toBe(0);
})

