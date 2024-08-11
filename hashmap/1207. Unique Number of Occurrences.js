/**
 * @param {number[]} arr
 * @return {boolean}
 */
// [1,2,2,1,1,3]
var uniqueOccurrences = function (arr) {
    const hash = {};
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1;
        }
    }
    console.log(hash);
    const set = new Set();
    for (let el in hash) {
        if (set.has(hash[el])) return false;
        else set.add(hash[el]);
    }
    return true;
};
