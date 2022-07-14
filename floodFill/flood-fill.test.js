const floodFill = require('./flood-fill');

test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2 Output: [[2,2,2],[2,2,0],[2,0,1]]', () => {
    let image = [[1,1,1],[1,1,0],[1,0,1]];
    let sr = 1;
    let sc = 1;
    let color = 2;
    expect(floodFill(image, sr, sc, color)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
});

test('Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0 Output: [[0,0,0],[0,0,0]]', () => {
    let image = [[0,0,0],[0,0,0]];
    sr = 0;
    sc = 0;
    color = 0;
    [[0,0,0],[0,0,0]]
    expect(floodFill(image, sr, sc, color)).toEqual([[0,0,0],[0,0,0]]);
});