var findHeightOfTree = function (root) {
    if (!root) return 0;

    let left = 1 + findHeightOfTree(root.left);
    let right = 1 + findHeightOfTree(root.right);

    return left > right ? left : right;
}

var diameterOfBinaryTree = function (root) {
    if (!root) return 0;

    let leftTreeWithRootHeight = findHeightOfTree(root.left);
    let rightTreeWithRootHeight = findHeightOfTree(root.right);

    let diameterOfTree = leftTreeWithRootHeight + rightTreeWithRootHeight;

    let leftTreeNoRootHeight = diameterOfBinaryTree(root.left);
    let rightTreeNoRootHeight = diameterOfBinaryTree(root.right);

    return Math.max(diameterOfTree, Math.max(leftTreeNoRootHeight, rightTreeNoRootHeight));
}

module.exports = diameterOfBinaryTree;