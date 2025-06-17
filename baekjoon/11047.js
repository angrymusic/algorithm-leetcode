function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let remainValue = M;
  const coins = [];
  let result = 0;
  for (let i = 1; i < input.length; i++) {
    const coinValue = input[i] * 1;
    if (coinValue > M) break;
    coins.push(coinValue);
  }
  while (coins.length > 0) {
    const popedCoin = coins.pop();
    result += Math.floor(remainValue / popedCoin);
    remainValue = remainValue % popedCoin;
    if (remainValue === 0) break;
  }
  // return answer
  console.log(result);
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
