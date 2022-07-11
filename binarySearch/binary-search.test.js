const search = require('./binary-search');

test('nums = [-1,0,3,5,9,12], target = 9 output 4', () => {
    let nums = [-1,0,3,5,9,12];
    let target = 9;
    expect(search(nums, target)).toBe(4);
});

test('nums = [-1,0,3,5,9,12], target = 2 output -1', () => {
    let nums = [-1,0,3,5,9,12];
    let target = 2;
    expect(search(nums,target)).toBe(-1);
})

test('nums = [-1,0,3,9,5], target = 3 output 2', () => {
    let nums = [-1,0,3,9,5];
    let target = 3;
    expect(search(nums, target)).toBe(2);
});

test('nums = [5], target = 5 output 0', () => {
    let nums = [5];
    let target = 5;
    expect(search(nums, target)).toBe(0);
});


