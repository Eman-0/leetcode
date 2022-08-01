const permute = require("./permute");

test('Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
    let nums = [1,2,3];
    expect(permute(nums)).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]])
})