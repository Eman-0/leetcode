const kClosest = require('./k-closest-to-origin');

test('Input: points = [[3,3],[5,-1],[-2,4]], k = 2 Output: [[3,3],[-2,4]]', () => {
    let points = [[3,3],[5,-1],[-2,4]];
    let k = 2;
    expect(kClosest(points, k)).toEqual([[3,3],[-2,4]]);
})