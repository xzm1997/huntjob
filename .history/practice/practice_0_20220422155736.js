let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let res = input, stackInput = [[], []], stackPoint = [[],[]];

res.forEach((item, index) => {
  if (item === 'A') stack[0].push(index);
  else stack[1].push(index);
})

console.log(stack);