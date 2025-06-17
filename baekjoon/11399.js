function solution(input) {
  const people = input[1].split(" ").map(Number);
  people.sort((a, b) => a - b);
  let result = 0;
  let sum = 0;
  people.forEach((e) => {
    result = result + e;
    sum += result;
  });
  // return answer
  console.log(sum);
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
