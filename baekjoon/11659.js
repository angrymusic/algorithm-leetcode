function solution(input) {
  const list = input[1].split(" ").map(Number);
  const dp = new Array(list.length + 1).fill(0);
  dp[1] = list[0];
  for (let i = 2; i <= list.length + 1; i++) {
    dp[i] = dp[i - 1] + list[i - 1];
  }
  input.slice(2).forEach((p) => {
    const [start, end] = p.split(" ").map(Number);
    console.log(dp[end] - dp[start - 1]);
  });
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
