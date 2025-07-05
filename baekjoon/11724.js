function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = new Map();
  input.slice(1).forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    if (map.has(a)) {
      map.get(a).push(b);
    } else {
      map.set(a, [b]);
    }
    if (map.has(b)) {
      map.get(b).push(a);
    } else {
      map.set(b, [a]);
    }
  });

  const visited = new Set();
  let result = 0;

  for (let i = 1; i <= N; i++) {
    if (visited.has(i)) continue;
    else {
      visited.add(i);
      const stack = [i];
      result++;
      while (stack.length > 0) {
        const popedSpot = stack.pop();
        
        map.get(popedSpot)?.forEach((spot) => {
          if (!visited.has(spot)) {
            visited.add(spot);
            stack.push(spot);
          }
        });
      }
    }
  }
  // return answer
  console.log(result);
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
