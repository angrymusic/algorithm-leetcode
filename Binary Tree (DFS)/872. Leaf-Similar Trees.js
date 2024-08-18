function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let root1Last = [];
    let root2Last = [];

    findLastItems(root1, root1Last);
    findLastItems(root2, root2Last);

    if (root1Last.join("") === root2Last.join("")) return true;
    else return false;
};

/**
 * @param {TreeNode} tree
 * @param {any[]} array
 * @return {boolean}
 */
let findLastItems = (tree, array) => {
    if (tree.left) findLastItems(tree.left, array);
    if (tree.right) findLastItems(tree.right, array);
    if (!tree.left && !tree.right) array.push(tree.val);
};
