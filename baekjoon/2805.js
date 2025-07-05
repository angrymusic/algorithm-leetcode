function solution(input) {
  const [N, L] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);

  const check = (h) => {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += trees[i] - h > 0 ? trees[i] - h : 0;
    //   console.log(`[check] sum: ${sum}`);
      if (sum >= L) return true;
    }
    return false;
  };

  let min = 0;
  let max = Math.max(...trees);
  let res = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    // console.log(`min: ${min}    mid: ${mid}  max: ${max}`);
    if (check(mid)) {
      min = mid + 1;
      res = mid;
    } else {
      max = mid - 1;
    }
  }
  // return answer
  console.log(res);
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
