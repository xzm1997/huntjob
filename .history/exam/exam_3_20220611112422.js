const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
res = dir.map(item => item.toString(16))
console.log(res);
