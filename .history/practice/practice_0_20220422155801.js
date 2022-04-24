let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let res = input, stackInput = [[], []], stackPoint = [[],[]];

res.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

res.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})

console.log(stack);