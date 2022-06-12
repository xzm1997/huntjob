const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
// let res = dir.map(item => item.toString(16).split(''))
let res = []

for (j = 0; j < num; ++j) {
  let ans = 0
  for (i = 0; i < dir[j]; ++i) {
    let item = i.toString(16).split('')
    let set = new Set(item);
    console.log(set)
    if (set.size === 1) {
      ans += 1;
    }
  }
  res.push(ans);
}

console.log(...res);
