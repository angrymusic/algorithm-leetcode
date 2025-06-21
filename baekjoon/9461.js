function solution(input) {
  const dp = new Array(100).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;
  dp[6] = 3;
  dp[7] = 4;
  dp[8] = 5;
  dp[9] = 7;
  dp[10] = 9;

  for (let i = 11; i <= 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  input
    .slice(1)
    .map(Number)
    .forEach((n) => {
      console.log(dp[n]);
    });
  // return answer
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
