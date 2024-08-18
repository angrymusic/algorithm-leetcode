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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    var addSum = (root, array)=>{
        if(!root) return;
        let sum = 0;
        let newArray = array.concat([root.val])
        
        for(let i = newArray.length-1; i>=0; i--){
            sum += newArray[i]
            if(sum === targetSum) count++;
        }
        
        if(root.right) addSum(root.right,newArray);
        if(root.left) addSum(root.left,newArray);
    }   
    addSum(root,[])

    return count
};
