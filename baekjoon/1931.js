function solution(input) {
  const meetings = input.slice(1).map((v) => v.split(" ").map(Number));
    // meetings.sort((a, b) => 
    //   a[1] - b[1]
    // );
    // 2 3, 3 3 이면 2개 but 3 3, 2 3이면 1개 
    // 정답은 2개여야함.
  meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let count = 0;
  let endTime = 0;

  for (const [start, end] of meetings) {
    if (start >= endTime) {
      endTime = end;
      count++;
    }
  }
  // return answer
  console.log(count);
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
