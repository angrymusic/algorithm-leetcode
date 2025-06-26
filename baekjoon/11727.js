function solution(input) {
  const max = Number(input[0]);
  const dp = new Array(max + 1).fill(0);

  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= max; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  console.log(dp[max]);
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
