var isBalanced = function(root) {
    return helper(root, 0) >= 0;  
 };
 
 function helper(root, depth) {
     if (!root) return depth;
     let left = helper(root.left, depth + 1);
     let right = helper(root.right, depth + 1);
     
     return Math.abs(left - right) > 1 ? -1 : Math.max(left, right);
     
 }

 module.exports = isBalanced;