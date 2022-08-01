const merge = require("./merge-intervals");

test('Input: intervals = [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]]', () => {
    let intervals = [[1,3],[2,6],[8,10],[15,18]];
    expect(merge(intervals)).toEqual([[1,6],[8,10],[15,18]]);
})