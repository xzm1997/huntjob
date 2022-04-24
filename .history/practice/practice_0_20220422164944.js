let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let stackInput = [[], []], stackPoint = [[],[]];

input.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

point.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})

let res_0 = stackInput[0].length - stackPoint[1].length;
let res_1 = stackInput[1].length - stackPoint[0].length;

let res = res_0 > res_1 ? res_0 : res_1;

// console.log(stackInput, stackPoint);
console.log(res);