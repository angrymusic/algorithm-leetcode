/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const queue = [[...entrance, 0]];
  const visited = new Set();
  visited.add(`${entrance[0]}-${entrance[1]}`);
  const MAX_X = maze[0].length - 1;
  const MAX_Y = maze.length - 1;

  const directions = [
    [0, -1], // left
    [0, 1], // right
    [-1, 0], // up
    [1, 0], // down
  ];

  while (queue.length > 0) {
    const [curY, curX, result] = queue.shift();

    if (result > 0) {
      // 제자리가 아니고 한칸 움직였을 때 끝에 도달한 경우
      if (curX === 0 || curY === 0 || curX === MAX_X || curY === MAX_Y)
        return result;
    }
    for (const [dy, dx] of directions) {
      const newY = curY + dy;
      const newX = curX + dx;

      if (
        newY >= 0 &&
        newY <= MAX_Y &&
        newX >= 0 &&
        newX <= MAX_X &&
        maze[newY][newX] === "." &&
        !visited.has(`${newY}-${newX}`)
      ) {
        queue.push([newY, newX, result + 1]);
        visited.add(`${newY}-${newX}`);
      }
    }
  }

  return -1;
};

// 성능은 밑에가 조금 더 좋음
// /**
//  * @param {character[][]} maze
//  * @param {number[]} entrance
//  * @return {number}
//  */
// var nearestExit = function (maze, entrance) {
//   const queue = [[...entrance, 0]];
//   const visited = new Set();
//   visited.add(`${entrance[1]}-${entrance[0]}`);
//   const MAX_X = maze[0].length - 1;
//   const MAX_Y = maze.length - 1;

//   while (queue.length > 0) {
//     const [curY, curX, result] = queue.shift();

//     if (result > 0) {
//       // 제자리가 아니고 한칸 움직였을 때 끝에 도달한 경우
//       if (curX === 0 || curY === 0 || curX === MAX_X || curY === MAX_Y)
//         return result;
//     }
//     // left
//     if (
//       curX - 1 >= 0 &&
//       maze[curY][curX - 1] === "." &&
//       !visited.has(`${curX - 1}-${curY}`)
//     ) {
//       queue.push([curY, curX - 1, result + 1]);
//       visited.add(`${curX - 1}-${curY}`);
//     }
//     // right
//     if (
//       curX + 1 <= MAX_X &&
//       maze[curY][curX + 1] === "." &&
//       !visited.has(`${curX + 1}-${curY}`)
//     ) {
//       queue.push([curY, curX + 1, result + 1]);
//       visited.add(`${curX + 1}-${curY}`);
//     }
//     // top
//     if (
//       curY - 1 >= 0 &&
//       maze[curY - 1][curX] === "." &&
//       !visited.has(`${curX}-${curY - 1}`)
//     ) {
//       queue.push([curY - 1, curX, result + 1]);
//       visited.add(`${curX}-${curY - 1}`);
//     }
//     // bottom
//     if (
//       curY + 1 <= MAX_Y &&
//       maze[curY + 1][curX] === "." &&
//       !visited.has(`${curX}-${curY + 1}`)
//     ) {
//       queue.push([curY + 1, curX, result + 1]);
//       visited.add(`${curX}-${curY + 1}`);
//     }
//   }

//   return -1;
// };
