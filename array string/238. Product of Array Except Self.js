/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 2 2 3 4 5
var productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left = left * nums[i];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right = right * nums[i]
    }
    return result;
};
