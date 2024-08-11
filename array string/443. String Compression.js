/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
    let exChar = chars[0];
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === exChar) {
            chars.splice(i, 1);
            i--;
            count++;
            if (i === chars.length - 1) {
                exChar = chars[i];
                let countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars.push(countStr[j]);
                }
                i += countStr.length;
            }
        } else {
            exChar = chars[i];
            if (count > 1) {
                let countStr = count.toString();
                for (let j = countStr.length - 1; j >= 0; j--) {
                    chars.splice(i, 0, countStr[j]);
                }
                i += countStr.length;
            }
            count = 1;
        }
    }
    console.log(...chars);
    return chars.length;
};
compress(["a", "a", "b", "b", "b"]);
// var compress = function (chars) {
//     let result = 0;
//     let exChar = chars[0];
//     let count = 1;
//     for (let i = 1; i < chars.length; i++) {
//         if (chars[i] === exChar) {
//             chars.splice(i,1)
//             count++;
//         } else {
//             result = result + count.toString().length + 1;
//             if (count === 1) result--;
//             count = 1;
//             exChar = chars[i];
//         }
//         if (i === chars.length - 1) {
//             result = result + count.toString().length + 1;
//             if (count === 1) result--;
//             count = 1;
//             exChar = chars[i];
//         }
//     }
//     if (chars.length === 1) result++;
//     console.log(result);
//     return result;
// };
