function solution(input) {
  const [N, r, c] = input[0].split(" ").map(Number);
  let count = 0;

  const divide = (startY, startX, n) => {
    if (n === 1) {
      if (startY === r && startX === c) {
        console.log(count);
      }
      return;
    } else {
      if (r < startY + n / 2 && c < startX + n / 2)
        divide(startY, startX, n / 2);
      else if (r < startY + n / 2 && startX + n / 2 <= c) {
        count += (n / 2) ** 2;
        divide(startY, startX + n / 2, n / 2);
      } else if (startY + n / 2 <= r && c < startX + n / 2) {
        count += (n / 2) ** 2 * 2;
        divide(startY + n / 2, startX, n / 2);
      } else if (startY + n / 2 <= r && startX + n / 2 <= c) {
        count += (n / 2) ** 2 * 3;
        divide(startY + n / 2, startX + n / 2, n / 2);
      }
    }
  };

  divide(0, 0, 2 ** N);
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
