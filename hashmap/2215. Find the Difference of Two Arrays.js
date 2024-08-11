/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    const result = [];
    const resNum = [];
    for (const num of nums1Set) {
        if (!nums2Set.has(num)) {
            resNum.push(num);
        }
    }
    result.push([...resNum]);
    resNum.length = 0;
    for (const num of nums2Set) {
        if (!nums1Set.has(num)) {
            resNum.push(num);
        }
    }
    result.push([...resNum]);
    return result;
};
