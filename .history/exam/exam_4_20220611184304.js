const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let map = new Map(), ans = 0;
let max = Math.max(...dir);
let res = new Array(parseInt(num)).fill(0)
// console.log(num, res)

for (let i = 0; i < num; i++) {
  map.set(dir[i], i);
}

for (let i = 1; i <= max; ++i) {
  let item = i.toString(16).split('')
  let set = new Set(item);
  if (set.size === 1) {
    ans += 1;
  }
  if (map.get(i)) {
    res[map.get(i)] = ans;
  }
}
console.log(map)
