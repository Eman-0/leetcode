const TreeNode = require("./tree-node");

var invertTree = function(root) {
    if (!root) {
        return null;
    }
    const tempNode = new TreeNode();

    tempNode.val = root.val;
    tempNode.left = invertTree(root.right);
    tempNode.right = invertTree(root.left);

    return tempNode;
}

module.exports = invertTree;