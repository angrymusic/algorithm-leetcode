/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const stack = [];
    s.split("").forEach((el) => {
        if (el === "*") stack.pop();
        else stack.push(el);
    });
    return stack.join('')
};
