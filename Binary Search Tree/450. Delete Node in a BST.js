/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (null === root) {
    return null;
  }

  if (root.val === key) {
    if (null === root.left && null === root.right) return null;
    if (null !== root.left && null !== root.right) {
      let curr = root.right;
      while (curr.left) {
        curr = curr.left;
      }
      curr.left = root.left;
      return root.right;
    }
    if (null === root.left) {
      return root.right;
    }
    if (null === root.right) {
      return root.left;
    }
  }

  if (key < root.val) {
    // look for our target node in the left subtree
    root.left = deleteNode(root.left, key);
  } else {
    // look for our target node in the right subtree
    root.right = deleteNode(root.right, key);
  }

  return root;
};
