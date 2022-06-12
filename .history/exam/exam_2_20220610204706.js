const read_line = require('readline-sync')
let input = read_line.question("")
let m, n;
[m, n] = input.split(' ');
// console.log(m,n);
let map = [];
for (let i = 0; i < m; ++i) {
  let inputLine = read_line.question("").split(' ');
  map.push(inputLine.map(item => parseInt(item)));
}
// console.log(map);

for (let i = 1; i < m; ++i) {
  map[i][0] += map[i-1][0];
}

for (let i = 1; i < m; ++i) {
  map[0][i] += map[0][i-1];
}

for (let i = 0; i < m; ++i) {
  for (let j = 0; j < n; ++j) {

  }
}
