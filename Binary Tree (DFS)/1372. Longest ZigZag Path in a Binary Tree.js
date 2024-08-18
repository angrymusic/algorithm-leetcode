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
var longestZigZag = function(root) {
    if (!root) return 0;

    let moveZigZag = (root, exMove, count) => {
        if (!root) return count-1;

        let left = 0, right = 0;

        if (exMove === 'left') {
            left = moveZigZag(root.left, 'left', 1);
            right = moveZigZag(root.right, 'right', count + 1);
        } else {
            left = moveZigZag(root.left, 'left', count + 1);
            right = moveZigZag(root.right, 'right', 1);
        }

        return Math.max(left, right);
    };

    return Math.max(moveZigZag(root.left, 'left', 1), moveZigZag(root.right, 'right', 1));
};