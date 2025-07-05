function solution(input) {
  const visited = new Set();
  const [start, end] = input[0].split(" ").map(Number);
  let queue = [[start, 0]];
  while (queue.length) {
    const [num, dep] = queue.shift();
    if (num === end) {
      console.log(dep);
      break;
    }
    visited.add(num);
    const minusOne = num - 1;
    const plusOne = num + 1;
    const multiTwo = num * 2;
    if (!visited.has(minusOne) && minusOne >= 0) {
      visited.add(minusOne);
      queue.push([minusOne, dep + 1]);
    }
    if (!visited.has(plusOne) && plusOne <= 100000) {
      visited.add(plusOne);
      queue.push([plusOne, dep + 1]);
    }
    if (!visited.has(multiTwo) && multiTwo <= 100000) {
      visited.add(multiTwo);
      queue.push([multiTwo, dep + 1]);
    }
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
