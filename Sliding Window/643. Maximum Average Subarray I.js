/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let head = 0;
    let tail = k - 1;
    const sums = [ nums.slice(head, tail + 1).reduce((a, b) => a + b, 0)]
    let sum = sums[0];
    for (let i = tail + 1; i < nums.length; i++) {
        sum = sum - nums[head] + nums[i];
        sums.push(sum);
        head++;
    }

    return Math.max(...sums) / k;
};
findMaxAverage([1,12,-5,-6,50,3], 4); // 4
