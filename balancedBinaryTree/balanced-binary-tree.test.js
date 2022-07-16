const isBalanced = require('./balanced-binary-tree');
const TreeNode = require('./tree-node');

test('root = [3,9,20,null,null,15,7] Output: true', () => {
    var rootRightChildChild = new TreeNode(15);
    var rootLeftChildChild = new TreeNode(7);
    var rootLeftChild = new TreeNode(9);
    var rootRightChild = new TreeNode(20, rootLeftChildChild, rootRightChildChild);
    var root = new TreeNode(3, rootLeftChild, rootRightChild);

    expect(isBalanced(root)).toBe(true);
})

test('root = [3,9,20,null,null,15,7] Output: true', () => {
    var rootRightChildChildChild = new TreeNode(45)
    var rootRightChildChild = new TreeNode(15, null, rootRightChildChildChild);
    var rootLeftChildChild = new TreeNode(7);
    var rootLeftChild = new TreeNode(9);
    var rootRightChild = new TreeNode(20, rootLeftChildChild, rootRightChildChild);
    var root = new TreeNode(3, rootLeftChild, rootRightChild);

    expect(isBalanced(root)).toBe(false);
})