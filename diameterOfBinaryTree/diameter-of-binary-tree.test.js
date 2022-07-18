const TreeNode = require('./tree-node');
const diameterOfBinaryTree = require('./diameter-of-binary-tree');

test('Input: root = [1,2,3,4,5] Output: 3', () => {
    let node4 = new TreeNode(5);
    let node3 = new TreeNode(4)
    let node2 = new TreeNode(3)
    let node1 = new TreeNode(2, node3, node4);
    let root = new TreeNode(1, node1, node2)
    expect(diameterOfBinaryTree(root)).toBe(3)
})