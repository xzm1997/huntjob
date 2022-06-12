const read_line = require('readline-sync')
let k, r;
[k, r] = read_line.question("").split(' ').map(item => parseInt(item));
// console.log(k, r);

let maxNum = 1;
while (true) {
  if (maxNum * k > r) break;
  maxNum *= k;
}
