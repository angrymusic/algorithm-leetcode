function solution(input) {
  const [Spots, Lines, StartSpot] = input[0].split(" ").map(Number);
  const relationMap = new Map();

  // set relations
  input.slice(1).forEach((line) => {
    const [A, B] = line.split(" ").map(Number);

    if (relationMap.has(A)) {
      relationMap.get(A).push(B);
    } else {
      relationMap.set(A, [B]);
    }

    if (relationMap.has(B)) {
      relationMap.get(B).push(A);
    } else {
      relationMap.set(B, [A]);
    }
  });

  // common
  const visited = new Set();
  const result = [];

  // dfs
  const stack = [StartSpot];
  while (stack.length > 0) {
    const popedSpot = stack.pop();
    if (visited.has(popedSpot)) continue;
    else {
      (relationMap.get(popedSpot) ?? [])
        .sort((a, b) => b - a)
        .forEach((spot) => {
          stack.push(spot);
        });
      result.push(popedSpot);
      visited.add(popedSpot);
    }
  }
  console.log(result.join(" "));

  // init
  result.length = 0;
  visited.clear();

  //bfs
  const queue = [StartSpot];
  while (queue.length > 0) {
    const shiftedSpot = queue.shift();
    if (visited.has(shiftedSpot)) continue;
    else {
      (relationMap.get(shiftedSpot) ?? [])
        .sort((a, b) => a - b)
        .forEach((spot) => {
          queue.push(spot);
        });
      result.push(shiftedSpot);
      visited.add(shiftedSpot);
    }
  }
  console.log(result.join(" "));
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
