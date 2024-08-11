/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';
    const maxIndex = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxIndex; i++) {
        if (word1.length > i) {
            result += word1[i];
        }
        if (word2.length > i) {
            result += word2[i];
        }
    }
    return result;
};
