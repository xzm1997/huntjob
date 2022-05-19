/*
 * readline 
*/
const diff = function(front,back) {
  // console.log(front+1)
  let res = 0
}

let inputStr = '102'.split('')
let input = [10], res = 0
inputStr.forEach((item) => {
  input.push(Number(item))
})
// console.log(input)
if (input.length === 1) return 0
let dir = [
  0b1111110,// 0
  0b0110000,// 1
  0b1101101,// 2
  0b1111001,// 3
  0b0110011,// 4
  0b1011011,// 5
  0b1011111,// 6
  0b1110000,// 7
  0b1111111,// 8
  0b1111011,// 9
  0b0000000 // null => 10
]
// console.log(input)
for (let i = 0; i < input.length-1; ++i) {
  res += diff(input[i], input[i+1])
}
console.log(res)