const search = require("./search-in-rotated-array");

test('Input: nums = [4,5,6,7,0,1,2], target = 0 Output: 4', () => {
    let nums = [4,5,6,7,0,1,2];
    let target = 0;
    expect(search(nums, target)).toBe(4);
})
test('Input: nums = [4,5,6,7,0,1,2], target = 3 Output: -1', () => {
    let nums = [4,5,6,7,0,1,2];
    let target = 3;
    expect(search(nums, target)).toBe(-1);
})
test('Input: nums = [1], target = 0 Output: -1', () => {
    let nums = [1];
    let target = 0;
    expect(search(nums, target)).toBe(-1);
})
