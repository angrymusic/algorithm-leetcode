/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (right >= left) {
        let area = (right - left) * Math.min(height[right], height[left]);
        if (max < area) max = area;
        if (height[right] > height[left]) left++;
        else right--;
    }
    return max;
};
console.log(maxArea([1,2,1]))
