/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let counter = 1;
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        n--;
    } else
        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] === 0) counter++;
            else counter = 0;
            console.log(counter);
            if (i === flowerbed.length - 1 && counter === 2) n--;
            if (counter === 3) {
                n--;
                counter = 1;
            }
        }
    if (n <= 0) return true;
    else return false;
};

// solution
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};
