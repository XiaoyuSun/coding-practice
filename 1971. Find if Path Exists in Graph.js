/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (n === 1) return true;
  if (!edges.length) return false;

  let map = {};

  for (let edge of edges) {
    let [first, second] = edge;

    if (!map[first]) {
      map[first] = new Set();
    }
    map[first].add(second);

    if (!map[second]) {
      map[second] = new Set();
    }
    map[second].add(first);
  }

  let visited = new Set([source]);
  let queue = [map[source]];

  while (queue.length) {
    let currSet = queue.shift();

    if (currSet.has(destination)) {
      return true;
    }

    for (let value of currSet) {
      if (visited.has(value)) continue;

      visited.add(value);
      queue.push(map[value]);
    }
  }

  return false;
};
