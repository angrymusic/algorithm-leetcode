/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let prev1 = Infinity;
    let prev2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (prev2 < nums[i]) return true;
        else if (prev1 > nums[i]) prev1 = nums[i];
        else if (prev1 < nums[i]) prev2 = nums[i];
    }
    return false;
};
console.log(increasingTriplet([0, 4, 2, -1, 3]));
