//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return searchBT(root);
};

/**
 * @param {TreeNode | null} tree
 * @return {number}
 */
let searchBT = (tree) => {
    if (!tree) return 0;
    if (!tree.left && !tree.right) return 1;

    return Math.max(searchBT(tree.left), searchBT(tree.right)) + 1;
};


// solution 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let leftSubHeight = maxDepth(root.left)
    let rightSubHeight = maxDepth(root.right) 
    return Math.max(leftSubHeight, rightSubHeight) + 1
};