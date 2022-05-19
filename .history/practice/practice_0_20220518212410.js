/*
 * readline 
*/
const diff = function(front,back) {
  // console.log(front+1)
  let res = 0
  for (let i = 0; i < 7; i++) {
  }
  return res
}

let inputStr = '102'.split('')
let input = [10], res = 0
inputStr.forEach((item) => {
  input.push(Number(item))
})
// console.log(input)
if (input.length === 1) return 0
let dir = [
  1111110,// 0
  0110000,// 1
  1101101,// 2
  1111001,// 3
  0110011,// 4
  1011011,// 5
  1011111,// 6
  1110000,// 7
  1111111,// 8
  1111011,// 9
  0000000 // null => 10
]
// console.log(input)
for (let i = 0; i < input.length-1; ++i) {
  res += diff(input[i], input[i+1])
}
console.log(res)