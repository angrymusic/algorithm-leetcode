function solution(input) {
  const result = [];
  const dp = {};
  dp[0] = { 0: 1, 1: 0 };
  dp[1] = { 0: 0, 1: 1 };
  for (let i = 2; i <= 40; i++) {
    dp[i] = { 0: dp[i - 1][0] + dp[i - 2][0], 1: dp[i - 1][1] + dp[i - 2][1] };
  }

  for (let i = 1; i < input.length; i++) {
    const _i = input[i] * 1;
    result.push(`${dp[_i][0]} ${dp[_i][1]}`);
  }
  // return answer
  result.forEach((e) => console.log(e));
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
