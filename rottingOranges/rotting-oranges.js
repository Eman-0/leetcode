/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let minutes = -1;
    let visitedRotten = new Set();
    
    let rottenOranges = getRottenOranges(visitedRotten, grid);
    
    while(rottenOranges.length !== 0) {
        for(let orange in rottenOranges) {
            let [x, y] = rottenOranges[orange].split('-');
            x = parseInt(x);
            y = parseInt(y);
            
            toRottenOrange(x - 1, y, grid);
            toRottenOrange(x + 1, y, grid);
            toRottenOrange(x, y + 1, grid);
            toRottenOrange(x, y - 1, grid);
        }
        minutes++;
        rottenOranges = getRottenOranges(visitedRotten, grid);
    }
    
    for (let row in grid) {
        for (let col in grid[row]) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }
    return minutes > 0 ? minutes: 0;
};

var toRottenOrange = (row, col, grid) => {
    if (!grid[row] || !grid[row][col] ||
        grid[row][col] === 0 || grid[row][col] === 2) {
            return;
    }
    
    if (grid[row][col] === 1) {
        grid[row][col] = 2;
    }
}

var getRottenOranges = (visitedRotten, grid) => {
    const result = [];
        for (let row in grid) {
            for (let col in grid[row]) {
              const position = row + "-" + col;
              if (grid[row][col] === 2 && !visitedRotten.has(position)) {
                visitedRotten.add(position);
                result.push(row + "-" + col);
              }
            }
        }
    return result;
}

module.exports = orangesRotting;