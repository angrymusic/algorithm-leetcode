/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const map = new Map();
  const stack = [];
  // map init
  for (let i = 0; i < rooms.length; i++) {
    map.set(i, false);
  }
  // go room 0
  map.set(0, true);
  // get keys
  stack.push(...rooms[0]);

  while (stack.length > 0) {
    const newKey = stack.pop();
    map.set(newKey, true);
    rooms[newKey].forEach((el) => {
      if (!map.get(el)) {
        stack.push(el);
      }
    });
  }

  for (const [key, value] of map) {
    if (value === false) return false;
  }

  return true;
};
