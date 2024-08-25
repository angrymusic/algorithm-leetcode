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
var maxLevelSum = function (root) {
    const q = [];
    let temp = [];
    const result = [];
    q.push(root);
    result.push(root.val);
    while (q.length > 0) {
        const popedNode = q.shift();
        if (!popedNode) break;

        if (popedNode.left) temp.push(popedNode.left);
        if (popedNode.right) temp.push(popedNode.right);
        if (q.length === 0) {
            if (temp.length > 0) {
                result.push(
                    temp.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.val;
                    }, 0)
                );
                q.push(...temp);
                temp = [];
            }
        }
    }

    console.log(result);
    return (
        result.reduce((maxIdx, currentValue, currentIndex, array) => {
            return currentValue > array[maxIdx] ? currentIndex : maxIdx;
        }, 0) + 1
    );
};
