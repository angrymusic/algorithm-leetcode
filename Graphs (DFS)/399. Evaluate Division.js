/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const map = new Map();
  // make adjlist
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);

    // a / b = value
    map.get(a).push({ val: b, res: value });
    // b / a = 1 / value
    map.get(b).push({ val: a, res: 1 / value });
  }

  // make dfs func
  /**
   * @param {string} a
   * @param {string} b
   * @return {number}
   */
  const dfs = (a, b) => {
    if (!map.has(a) || !map.has(b)) return -1;
    if (a === b) return 1;

    const stack = [[a, 1]];
    const visited = new Set();

    while (stack.length > 0) {
      let [currentNode, currentRes] = stack.pop();

      for (let { val, res } of map.get(currentNode)) {
        if (!visited.has(val)) {
          if (val === b) return currentRes * res;
          visited.add(val);
          stack.push([val, currentRes * res]);
        }
      }
    }

    return -1;
  };

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    result.push(dfs(a, b));
  }

  return result;
};
