function solution(input) {
  const N = Number(input[0]);
  const paper = input.slice(1).map((line) => line.split(" ").map(Number));
  let white = 0;
  let blue = 0;

  const isOneColor = (startY, startX, n) => {
    const color = paper[startY][startX];
    let isOne = true;
    for (let y = startY; y < startY + n; y++) {
      for (let x = startX; x < startX + n; x++) {
        if (color !== paper[y][x]) {
          isOne = false;
          break;
        }
      }
      if (!isOne) break;
    }
    return isOne;
  };

  const increaseColor = (y, x) => {
    if (paper[y][x] === 0) white++;
    else blue++;
  };

  const divide = (startY, startX, n) => {
    if (isOneColor(startY, startX, n)) {
      increaseColor(startY, startX);
    } else {
      divide(startY, startX, n / 2);
      divide(startY, startX + n / 2, n / 2);
      divide(startY + n / 2, startX, n / 2);
      divide(startY + n / 2, startX + n / 2, n / 2);
    }
  };

  divide(0, 0, N);

  console.log(`${white}\n${blue}`);
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
