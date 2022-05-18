/*
 * readline 
*/

let inputStr = '102'.split('')
let input = []
inputStr.forEach((item) => {
  input.push(Number(item))
})
console.log(input)
let dir = [
  [0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]