/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    if (root.val === p.val) return p;
    if (root.val === q.val) return q;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // if(left&&right) return root;
    // if(!left&&right) return right;
    // if(left&&!right) return left;
    // return null;

    return left && right ? root : left || right;
};
