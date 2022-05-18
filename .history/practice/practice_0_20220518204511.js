/*
 * readline 
*/

let inputStr = '102'.split('')
let input = []
inputStr.forEach((item) => {
  input.push(Number(item))
})
// console.log(input)
if (input.length === 0) return 0
let dir = [
  [0,0,0,0,0,0,0],// 0
  [0,1,1,0,0,0,0],// 1
  [1,1,0,1,1,0,1],// 2
  [1,1,1,1,0,0,1],// 3
  [0,1,1,0,0,1,1],// 4
  [1,0,1,1,0,1,1],// 5
  [1,0,1,1,1,1,1],// 6
  [1,1,1,0,0,0,0],// 7
  [1,1,1,1,1,1,1],// 8
  [1,1,1,1,0,1,1] // 9
]

for (let i = 0; i < input.length; ++i) {

}
