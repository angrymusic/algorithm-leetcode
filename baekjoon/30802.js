function solution(input) {
  const people = input[0];
  const tShirts = [];
  input[1].split(" ").forEach((e) => {
    tShirts.push(e);
  });
  let [T, P] = input[2].split(" ").map(Number);

  let countT = 0;
  tShirts.forEach((e) => {
    countT += Math.floor(e / T);
    if (e % T !== 0) {
      countT += 1;
    }
  });

  console.log(`${countT}\n${Math.floor(people / P)} ${people % P}`);
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
