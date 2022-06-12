const read_line = require('readline-sync')
[k, r] = read_line.question("").split(' ').map(item => parseInt(item));
console.log(k, r);
