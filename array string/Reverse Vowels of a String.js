/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const aeiou = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const indexs = [];
    const vowels = [];
    const arrayS = s.split("");
    arrayS.forEach((char, index) => {
        if (aeiou.includes(char)) {
            indexs.push(index);
            vowels.push(char);
        }
    });
    indexs.forEach((index) => {
        arrayS[index] = vowels.pop();
    });

    return arrayS.join("");
};

// a e i o u
