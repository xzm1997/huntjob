// const read_line = require('readline-sync')
// let input = read_line.question("")

// console.log('input:' + input)

input = '<12><123><1234>'

let reg = ^<([a-zA-Z]+)>[\s\S]*?</\1>$
console.log(input.replace(reg, ''));
if (input.replace(reg, '')) {
  console.log('NO')
  return;
}

let temp = input.split(reg)
console.log(temp)

let dir = [];
