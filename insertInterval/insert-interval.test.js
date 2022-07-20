const insert = require('./insert-interval');

test('Input: intervals = [[1,3],[6,9]], newInterval = [2,5]', () => {
    let intervals = [[1,3],[6,9]];
    let newInterval = [2,5];
    expect(insert(intervals, newInterval)).toEqual([[1,5],[6,9]]);
})

test('intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', () => {
    let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
    let newInterval = [4,8];
    expect(insert(intervals, newInterval)).toEqual([[1,2],[3,10],[12,16]]);
})