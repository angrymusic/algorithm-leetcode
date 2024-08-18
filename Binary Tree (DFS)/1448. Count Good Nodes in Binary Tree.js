/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    let standard = root.val;
    let count = 0;
    let countGood = (tree, standard) => {
        if(tree.val>=standard) count++
        if(tree.val>standard) standard = tree.val
        if (tree.left) countGood(tree.left, standard);
        if (tree.right) countGood(tree.right, standard);
    };
    countGood(root, standard);

    return count;
};

