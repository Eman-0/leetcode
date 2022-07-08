const TreeNode = require("./tree-node");
const invertTree = require("./invert-tree");

test('[2,1,3] = [2,3,1]', () => {
    var leftNode = new TreeNode(1);
    var rightNode = new TreeNode(3);
    var root = new TreeNode (2, leftNode, rightNode);

    expect(invertTree(root)).toEqual({"left": {"left": null, "right": null, "val": 3}, "right": {"left": null, "right": null, "val": 1}, "val": 2});
})