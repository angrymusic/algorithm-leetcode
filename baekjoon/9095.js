function solution(input) {
  const problems = input.slice(1).map(Number);
  const dp = new Array(11).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  problems.forEach((p) => console.log(dp[p]));

  // return answer
  console.log();
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
