const updateMatrix = matrix => {
	// find zeroes and mark visited as Infinity
	
	// create queue which is composed of zeroes in the matrix
	// mark 1s as Infinity
	const findZeroes = () => {
		const output = [];

		for (let r = 0; r < matrix.length; r++) {
			for (let c = 0; c < matrix[0].length; c++) {
				const cv = matrix[r][c];

				if (cv === 0) output.push([r, c, 0]);
				if (cv === 1) matrix[r][c] = Infinity; // mark 1s as Infinity
			}
		}

		return output;
	};

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	const queue = findZeroes();
    
    let iterationCount = 0;

	while (queue.length) {
        const [row, col, path] = queue.shift();

        matrix[row][col] = Math.min(matrix[row][col], path); // update 1s with current path

        // traverse adjacents
        for (const [dx, dy] of directions) {
            const x = row + dx;
            const y = col + dy;

            // handle invalids
            if (x < 0 || x >= matrix.length) continue;
            if (y < 0 || y >= matrix[0].length) continue;
            if (matrix[x][y] !== Infinity) continue;

            queue.push([x, y, path + 1]);
        }
        iterationCount++;
	}

	return matrix;
};

module.exports = updateMatrix;