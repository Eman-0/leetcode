const threeSum = require('./three-sum');

test('Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]', () => {
    let nums = [-1,0,1,2,-1,-4];
    expect(threeSum(nums)).toEqual([[-1,-1,2],[-1,0,1]]);
})