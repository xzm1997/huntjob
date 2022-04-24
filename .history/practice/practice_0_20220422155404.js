let input = 'ATTTAA'.split('');
let res = input, stack = [0, 0];

res.forEach((item, index) => {
  if (item === 'A') stack[0] += 1;
  else stack[1] += 1;
})

console.log('TTAATT');