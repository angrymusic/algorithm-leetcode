function solution(input) {
  const testCaseCount = Number(input[0]);
  let remainCase = 0;
  const map = new Map();
  input.slice(2).forEach((data) => {
    if (isNaN(data)) {
      const [item, category] = data.split(" ");
      if (map.has(category)) {
        map.get(category).push(item);
      } else {
        map.set(category, [item]);
      }
    } else {
      let result = 1;
      map.forEach((val, key) => {
        result *= val.length + 1;
      });
      console.log(result - 1);
      map.clear();
    }
  });

  let result = 1;
  map.forEach((val, key) => {
    result *= val.length + 1;
  });
  console.log(result - 1);
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
