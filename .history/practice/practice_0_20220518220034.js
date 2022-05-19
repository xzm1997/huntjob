/*
 * readline 
*/
const diff = function(front,back) {
  // console.log(front+1)
  let res = 0
  for (let i = 0; i < 7; i++) {
    if (dir[front][i] !== dir[back][i]) res++
  }
  return res
}

let inputStr = ''.split('')
let input = [10], res = 0
inputStr.forEach((item) => {
  input.push(Number(item))
})
if (input.length === 1) {
  console.log('!!')
  // return
}
// console.log(input)
let dir = [
  [1,1,1,1,1,1,0],// 0
  [0,1,1,0,0,0,0],// 1
  [1,1,0,1,1,0,1],// 2
  [1,1,1,1,0,0,1],// 3
  [0,1,1,0,0,1,1],// 4
  [1,0,1,1,0,1,1],// 5
  [1,0,1,1,1,1,1],// 6
  [1,1,1,0,0,0,0],// 7
  [1,1,1,1,1,1,1],// 8
  [1,1,1,1,0,1,1],// 9
  [0,0,0,0,0,0,0] // null => 10
]
// console.log(input)
for (let i = 0; i < input.length-1; ++i) {
  res += diff(input[i], input[i+1])
}
console.log(res)


1111101
0011111