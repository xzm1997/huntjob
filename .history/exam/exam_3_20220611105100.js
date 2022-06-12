const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));
// console.log(num, dir);

let temp = [...new Set(dir)]
console.log(temp)
let result = 1

const gcd = function(x, y) {
  return x == 0 ? y : gcd(y%x, y)
}

while (temp.length > 1) {
  let num1 = temp[0], num2 = temp[1];
  result = gcd(num1, num2);
  if (result === 1) {
    result = 1;
    break;
  }
  else temp.splice(0, 2, result);
}

console.log(result);
