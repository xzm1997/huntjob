const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
// console.log(num, dir);

let temp = [...new Set(dir)]
// console.log(temp)
let result = 1

const gcd = function(x, y) {
  return x == 0 ? y : gcd(y%x, y)
}
