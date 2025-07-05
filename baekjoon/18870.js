function solution(input) {
  let ex;
  let count = 0;
  const map = new Map();
  const originList = input[1].split(" ").map(Number);
  [...originList]
    .sort((a, b) => a - b)
    .forEach((e, index) => {
      if (index === 0) {
        ex = e;
        map.set(e, 0);
        return;
      }
      if (e !== ex) {
        count = count + 1;

        ex = e;
        map.set(e, count);
        return;
      } else {
        return;
      }
    });

  // return answer
  console.log(originList.map((n) => map.get(n)).join(" "));
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
