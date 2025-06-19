function solution(input) {
  const couples = input.slice(2);

  // map 초기화
  const map = new Map([]);
  for (let i = 0; i < Number(input[0]); i++) {
    map.set(i + 1, []);
  }

  // 연결 추가
  couples.forEach((c) => {
    const [a, b] = c.split(" ").map(Number);
    map.get(a).push(b);
    map.get(b).push(a);
  });

  const q = [];
  q.push(1);
  const visited = {};
  visited[1] = true;
  const deaded = [];

  while (q.length > 0) {
    const poped = q.pop();
    map.get(poped).forEach((e) => {
      if (!visited[e]) {
        visited[e] = true;
        q.push(e);
        deaded.push(e);
      }
    });
  }

  // return answer
  console.log(deaded.length);
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
