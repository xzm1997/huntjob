const read_line = require('readline-sync')
let value = read_line.question("")
value = parseInt(value);
// console.log(value);

let dir = read_line.question("").split(' ').map(item => parseInt(item));
// console.log(dir);
let len = dir.shift();
dir.sort((a,b) => a-b);
// console.log(len, dir);
let map = new Map([[value, 0]]);
// console.log(map);
// map.set(10,2);

