var minReorder = function (n, connections) {
  let adjList = new Map();
  let result = 0;

  // 인접 리스트 생성
  for (let [u, v] of connections) {
    if (!adjList.has(u)) adjList.set(u, []);
    if (!adjList.has(v)) adjList.set(v, []);

    adjList.get(u).push({ node: v, isReversed: true }); // 원래 방향
    adjList.get(v).push({ node: u, isReversed: false }); // 역방향
  }

  let queue = [0];
  let visited = new Set([0]);

  // BFS 탐색
  while (queue.length > 0) {
    let current = queue.shift();

    for (let { node, isReversed } of adjList.get(current)) {
      if (!visited.has(node)) {
        if (isReversed) {
          result++; // 원래 방향이라면 증가
        }
        visited.add(node);
        queue.push(node);
      }
    }
  }

  return result;
};
