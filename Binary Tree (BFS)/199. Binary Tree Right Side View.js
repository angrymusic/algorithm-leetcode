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
 * @return {number[]}
 */
var rightSideView = function (root) {
    const q = [];
    let temp = [];
    const result = [];
    q.push(root);
    while (q.length > 0) {
        const popedNode = q.shift();
        if (!popedNode) break;
        if (popedNode.left) temp.push(popedNode.left);
        if (popedNode.right) temp.push(popedNode.right);
        if (q.length === 0) {
            result.push(popedNode.val);
            q.push(...temp);
            temp = [];
        }
    }

    return result;
};
