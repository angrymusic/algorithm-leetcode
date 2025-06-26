function solution(input) {
  const [N, target] = input[0].split(" ").map(Number);
  const lines = input.slice(1).map(Number);
  const _Max = Math.max(...lines);

  const check = (mid) => {
    let sum = 0;
    lines.forEach((line) => {
      sum += Math.floor(line / mid);
    });
    if (sum >= target) return true;
    else return false;
  };

  let min = 1;
  let max = _Max;
  let result = 0;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (check(mid)) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
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
