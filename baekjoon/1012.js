function solution(input) {
  let endPoint;
  let endCount = 0;
  const set = new Set();
  const stack = [];
  let result = 0;
  input.slice(1).forEach((str) => {
    const splitedStr = str.split(" ").map(Number);
    if (splitedStr.length === 3) {
      //init;
      endPoint = splitedStr[2];
      endCount = 0;
      result = 0;
      stack.length = 0;
      set.clear();
    } else {
      set.add(str);

      endCount++;
      if (endCount === endPoint) {
        set.forEach((val) => {
          result++;
          stack.push(val);
          while (stack.length > 0) {
            const [x, y] = stack.pop().split(" ").map(Number);
            if (set.has(`${x + 1} ${y}`)) {
              stack.push(`${x + 1} ${y}`);
              set.delete(`${x + 1} ${y}`);
            }
            if (set.has(`${x - 1} ${y}`)) {
              stack.push(`${x - 1} ${y}`);
              set.delete(`${x - 1} ${y}`);
            }
            if (set.has(`${x} ${y + 1}`)) {
              stack.push(`${x} ${y + 1}`);
              set.delete(`${x} ${y + 1}`);
            }
            if (set.has(`${x} ${y - 1}`)) {
              stack.push(`${x} ${y - 1}`);
              set.delete(`${x} ${y - 1}`);
            }
          }
        });

        console.log(result);
      }
    }
  });

  // return answer
  console.log();
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
