function solution(input) {
  const [maxY, maxX] = input[0].split(" ").map(Number);
  const target = {
    x: -1,
    y: -1,
  };
  const field = input.slice(1).map((v) => v.split(" ").map(Number));
  const result = Array.from({ length: maxY }, () => Array(maxX).fill(-1));

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (field[y][x] === 2) {
        target.y = y;
        target.x = x;
        result[y][x] = 0;
      }
      if (field[y][x] === 0) {
        result[y][x] = 0;
      }
    }
  }

  const visited = new Set();
  const queue = [[target.y, target.x, 0]];
  visited.add(`${target.y} ${target.x}`);

  while (queue.length) {
    const [y, x, depth] = queue.shift();
    if (y - 1 >= 0) {
      if (!visited.has(`${y - 1} ${x}`)) {
        if (field[y - 1][x] === 1) {
          visited.add(`${y - 1} ${x}`);
          result[y - 1][x] = depth + 1;
          queue.push([y - 1, x, depth + 1]);
        }
        if (field[y - 1][x] === 0) {
          visited.add(`${y - 1} ${x}`);
          result[y - 1][x] = 0;
        }
      }
    }
    if (y + 1 < maxY) {
      if (!visited.has(`${y + 1} ${x}`)) {
        if (field[y + 1][x] === 1) {
          visited.add(`${y + 1} ${x}`);
          result[y + 1][x] = depth + 1;
          queue.push([y + 1, x, depth + 1]);
        }
        if (field[y + 1][x] === 0) {
          visited.add(`${y + 1} ${x}`);
          result[y + 1][x] = 0;
        }
      }
    }
    if (x - 1 >= 0) {
      if (!visited.has(`${y} ${x - 1}`)) {
        if (field[y][x - 1] === 1) {
          visited.add(`${y} ${x - 1}`);
          result[y][x - 1] = depth + 1;
          queue.push([y, x - 1, depth + 1]);
        }
        if (field[y][x - 1] === 0) {
          visited.add(`${y} ${x - 1}`);
          result[y][x - 1] = 0;
        }
      }
    }
    if (x + 1 < maxX) {
      if (!visited.has(`${y} ${x + 1}`)) {
        if (field[y][x + 1] === 1) {
          visited.add(`${y} ${x + 1}`);
          result[y][x + 1] = depth + 1;
          queue.push([y, x + 1, depth + 1]);
        }
        if (field[y][x + 1] === 0) {
          visited.add(`${y} ${x + 1}`);
          result[y][x + 1] = 0;
        }
      }
    }
  }
  // return answer
  for (let y = 0; y < maxY; y++) {
    console.log(result[y].join(" "));
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
