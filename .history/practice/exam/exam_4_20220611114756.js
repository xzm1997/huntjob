const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let map = new Map();
let res = []

for (let i = 0; i < num; i++) {
  map.set(dir[i], i);
}
