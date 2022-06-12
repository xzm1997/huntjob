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
console.log(map);
