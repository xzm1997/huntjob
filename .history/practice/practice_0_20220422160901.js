let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let res = 0, exchange, stackInput = [[], []], stackPoint = [[],[]];

input.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

point.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})

exchange = Math.abs(stackInput[0].length - stackPoint[0].length);
let pointI = stackInput[0].length > stackInput[1].length ? 0 : 1;
let pointP = stackPoint[0].length > stackPoint[1].length ? 0 : 1;

console.log(stackInput, stackPoint);
console.log(pointI, pointP);