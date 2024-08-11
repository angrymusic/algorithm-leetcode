/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];
    asteroids.forEach((el) => {
        if (stack.length === 0) stack.push(el);
        else {
            if (stack[stack.length - 1] * el < 0) {
                if (el > 0) {
                    while (stack.length > 0) {
                        if (stack[stack.length - 1] * -1 < el) {
                            stack.pop();
                            if (stack.length === 0) {
                                stack.push(el);
                                break;
                            }
                        } else if (stack[stack.length - 1] * -1 === el) {
                            stack.pop();
                            break;
                        } else {
                            break;
                        }
                    }
                }
                if (el < 0) {
                    while (stack.length > 0) {
                        if (stack[stack.length - 1] < el * -1) {
                            stack.pop();
                            if (stack.length === 0) {
                                stack.push(el);
                                break;
                            }
                        } else if (stack[stack.length - 1] === el * -1) {
                            stack.pop();
                            break;
                        } else {
                            break;
                        }
                    }
                }
            } else {
                stack.push(el);
            }
        }
    });
    return stack;
};
