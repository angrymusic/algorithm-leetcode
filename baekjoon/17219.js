function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = new Map();
  const result = [];
  let findMode = false;
  for (let i = 1; i < input.length; i++) {
    const [site, pw] = input[i].split(" ");
    if (!findMode) map.set(site, pw);
    else result.push(map.get(site));

    if (i === N) findMode = true;
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
