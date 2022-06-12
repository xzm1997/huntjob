const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let res = dir.map(item => item.toString(16).split(''))
console.log(res);
