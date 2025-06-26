function solution(input) {
  const target = Number(input[0]);
  let remain = target;
  let result = 0;
  for (let i = Math.floor(target / 2); i > 0; i--) {
    const pow = i ** 2;
    if (pow <= remain) {
      remain -= pow;
      result++;
    }

    if (remain === 0) break;
    if (i === 1) i++;
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
