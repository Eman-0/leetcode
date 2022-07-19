const containsDuplicate = require('./contains-duplicate');

test('Input: nums = [1,2,3,1]', () => {
    let nums = [1,2,3,1];
    expect(containsDuplicate(nums)).toBe(true);
})

test('Input: nums = [1,2,3]', () => {
    let nums = [1,2,3];
    expect(containsDuplicate(nums)).toBe(false);
})