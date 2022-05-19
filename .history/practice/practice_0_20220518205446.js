/*
 * readline 
*/
const diff = function(front) {
  // console.log(dir[front], dir[back])
  let res = 0
  for (let i = 0; i < 7; i++) {
    if (dir[front][i] !== dir[front+1][i]) res++
  }
  return res
}

let inputStr = '1'.split('')
let input = [10], res = 0
inputStr.forEach((item) => {
  input.push(Number(item))
})
// console.log(input)
if (input.length === 1) return 0
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
console.log(diff(0,1))
for (let i = 0; i < input.length-1; ++i) {
  // res += diff(i)
}
// console.log(res)