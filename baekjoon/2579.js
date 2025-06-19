function solution(input) {
  const steps = input.map(Number);
  const dp = new Array(steps.length + 1).fill(0);
  const n = steps[0];
  dp[1] = steps[1];
  if (steps[0] === 1) {
    console.log(dp[1]);
    return;
  }
  dp[2] = steps[1] + steps[2];
  if (steps[0] === 2) {
    console.log(dp[2]);
    return;
  }

  for (let i = 3; i <= steps.length; i++) {
    dp[i] = Math.max(steps[i] + steps[i - 1] + dp[i - 3], steps[i] + dp[i - 2]);
  }
  // return answer
  console.log(dp[n]);
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
