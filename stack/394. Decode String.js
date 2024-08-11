/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let popArray = [];
    Array.from(s).forEach((el) => {
        if (el === "]") {
            // 반복할 문자열 만들기
            const reverseArray = [];
            while (1) {
                let item = popArray.pop();
                if (item === "[") break;
                else {
                    reverseArray.push(item);
                }
            }

            // 반복할 횟수 만들기
            const revrseNum = [];
            while (1) {
                if (!isNaN(popArray[popArray.length - 1] * 1)) {
                    revrseNum.push(popArray.pop());
                } else {
                    break;
                }
            }

            let num = revrseNum.reverse().join("") * 1;
            let array = reverseArray.reverse();
            for (let i = 1; i < num; i++) {
                array = array.concat(reverseArray);
            }

            popArray = popArray.concat(array);
        } else {
            popArray.push(el);
        }
    });

    return popArray.join("");
};

decodeString("3[a]2[bc]");
