const updateMatrix = require('./01-matrix');

test('Input: mat = [[0,0,0],[0,1,0],[1,1,1]] Output: [[0,0,0],[0,1,0],[1,2,1]]', () => {
    let mat = [[0,0,0],[0,1,0],[1,1,1]];

    expect(updateMatrix(mat)).toEqual([[0,0,0],[0,1,0],[1,2,1]])
})