/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const result = [];
    candies.forEach((el) => {
        if (el + extraCandies >= Math.max(...candies)) result.push(true);
        else result.push(false);
    });
    return result;
};
