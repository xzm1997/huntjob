const read_line = require('readline-sync')
let input = read_line.question("")

console.log('input:' + input)

let reg = /^<.*>$/g
if (input.replace(reg), '') {
  console.log(No);
}
