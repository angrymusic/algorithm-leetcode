function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const pokemons = input.slice(1, N + 1);
  const problems = input.slice(N + 1);
  const pokemonToIndex = new Map();

  pokemons.forEach((fruit, index) => {
    pokemonToIndex.set(fruit, index + 1);
  });

  let result = "";
  problems.forEach((problem) => {
    if (isNaN(problem)) {
      // 문제의 답이 문자열인 경우
      result += pokemonToIndex.get(problem) + "\n";
    } else {
      // 문제의 답이 숫자인 경우
      result += pokemons[problem - 1] + "\n";
    }
  });

  // return answer
  console.log(result.trim());
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
