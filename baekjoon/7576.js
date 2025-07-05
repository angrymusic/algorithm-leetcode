function solution(input) {
  const [maxX, maxY] = input[0].split(" ").map(Number);
  const field = input.slice(1).map((v) => v.split(" ").map(Number));
  const queue = [];
  const visited = new Set();
  let left = 0;
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (field[y][x] === 1) {
        queue.push([y, x, 0]);
        visited.add(`${y} ${x}`);
      } else if (field[y][x] === -1) {
        left++;
      }
    }
  }

  let max = 0;
  let front = 0;
  while (front < queue.length) {
    const [y, x, day] = queue[front++];
    if (y - 1 >= 0) {
      if (!visited.has(`${y - 1} ${x}`) && field[y - 1][x] === 0) {
        visited.add(`${y - 1} ${x}`);
        queue.push([y - 1, x, day + 1]);
      }
    }
    if (x - 1 >= 0) {
      if (!visited.has(`${y} ${x - 1}`) && field[y][x - 1] === 0) {
        visited.add(`${y} ${x - 1}`);
        queue.push([y, x - 1, day + 1]);
      }
    }
    if (y + 1 < maxY) {
      if (!visited.has(`${y + 1} ${x}`) && field[y + 1][x] === 0) {
        visited.add(`${y + 1} ${x}`);
        queue.push([y + 1, x, day + 1]);
      }
    }
    if (x + 1 < maxX) {
      if (!visited.has(`${y} ${x + 1}`) && field[y][x + 1] === 0) {
        visited.add(`${y} ${x + 1}`);
        queue.push([y, x + 1, day + 1]);
      }
    }
    if (front === queue.length) max = day;
  }

  if (visited.size + left === maxX * maxY) {
    console.log(max);
  } else {
    console.log(-1);
  }
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line); // 한 줄씩 입력을 배열에 저장
}).on("close", function () {
  solution(input); // 모든 입력을 받은 후 solution 호출
  process.exit();
});
