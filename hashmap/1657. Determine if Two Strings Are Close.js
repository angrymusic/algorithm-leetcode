/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

//종류가 같아야하고, 갯수의 조합이 같아야됨
var closeStrings = function (word1, word2) {
    const counter1 = {};
    const counter2 = {};
    for (let i = 0; i < word1.length; i++) {
        if (counter1[word1[i]]) counter1[word1[i]]++;
        else counter1[word1[i]] = 1;
    }
    for (let i = 0; i < word2.length; i++) {
        if (!counter1[word2[i]]) return false;
        if (counter2[word2[i]]) counter2[word2[i]]++;
        else counter2[word2[i]] = 1;
    }

    const Ncounter1 = {};
    const Ncounter2 = {};

    for (let el in counter1) {
        if (Ncounter1[counter1[el]]) Ncounter1[counter1[el]]++;
        else Ncounter1[counter1[el]] = 1;
    }
    for (let el in counter2) {
        if (Ncounter2[counter2[el]]) Ncounter2[counter2[el]]++;
        else Ncounter2[counter2[el]] = 1;
    }

    for (let el in Ncounter1) {
        if (Ncounter1[el] !== Ncounter2[el]) return false;
    }
    return true;
};
