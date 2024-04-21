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
    let first = edge[0];
    let second = edge[1];

    if (map[first]) {
      map[first].add(second)
    } else {
      map[first] = new Set().add(second)
    }

    if (map[second]) {
      map[second].add(first)
    } else {
      map[second] = new Set().add(first)
    }
  }

  let visited = new Set().add(source);
  let queue = []
  queue.push(map[source]);

  while (queue.length) {
    let currSet = queue.pop();

    if (currSet.has(destination)) {
      return true;
    }

    for (let value of currSet) {

      if (visited.has(value)) {
        continue;
      }

      visited.add(value);

      queue.push(map[value])
    }
  }

  return false;
};
