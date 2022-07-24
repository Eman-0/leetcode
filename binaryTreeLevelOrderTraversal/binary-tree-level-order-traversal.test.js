const levelOrder = require('./binary-tree-level-order-traversal');
const TreeNode = require('./tree-node');

test('Input: root = [3,9,20,null,null,15,7] Output: [[3],[9,20],[15,7]]', () => {
    const node7 = new TreeNode(7);
    const node15 = new TreeNode(15);
    const node20 = new TreeNode(20, node15, node7);
    const node9 = new TreeNode(9);
    const root = new TreeNode(3, node9, node20);
    expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
})