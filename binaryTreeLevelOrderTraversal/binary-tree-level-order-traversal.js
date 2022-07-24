
var levelOrder = function (root) {
    if (!root) return [];
    
    const queue = [];
    const output = [];

    queue.push(root);

    while(queue.length) {
        const row = [];
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const curElement = queue.shift();
            if(curElement.left) queue.push(curElement.left);
            if(curElement.right) queue.push(curElement.right);

            row.push(curElement.val);
        }
        output.push(row);
    }

    return output;
};

module.exports = levelOrder;