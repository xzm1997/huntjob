let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let res = 0, stackInput = [[], []], stackPoint = [[],[]];

input.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

point.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})





// console.log(stackInput, stackPoint);
console.log(res);