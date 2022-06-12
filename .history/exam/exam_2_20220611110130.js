const read_line = require('readline-sync')
let num = read_line.question("")
let dir = read_line.question("").split(' ').map(item => parseInt(item));

const findGCD = (nums) => {
  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);
  return run(maxNum, minNum);
}

const run = (a, b) => {
  if (a % b === 0) return b;
  return run(b, a % b);
}

console.log(findGCD(dir))
