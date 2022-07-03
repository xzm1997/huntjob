// const read_line = require('readline-sync')
// let input = read_line.question("")

// console.log('input:' + input)

input = '<12>'

let reg = /<.*>/g
console.log(input.replace(reg, ''));
if (input.replace(reg, '')) {
  console.log('No')
  return;
}

let temp = reg.exec(input)
console.log(temp)

let dir = [];
