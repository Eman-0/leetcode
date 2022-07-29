const combinationSum = require("./combination-sum")

test('Input: candidates = [2,3,6,7], target = 7 Output: [[2,2,3],[7]]', () => {
    let candidates = [2,3,6,7];
    let target = 7;
    expect(combinationSum(candidates, target)).toEqual([[2,2,3],[7]]);
})
test('Input: candidates = [2,3,5], target = 8 Output: [[2,2,2,2],[2,3,3],[3,5]]', () => {
    let candidates = [2,3,5];
    let target = 8;
    expect(combinationSum(candidates, target)).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
})
test('Input: candidates = [2], target = 1 Output: []', () => {
    let candidates = [2];
    let target = 1;
    expect(combinationSum(candidates, target)).toEqual([]);
})
