let input = 'ATTTAA'.split('');
let points = 
let res = input, stack = [[], []];

res.forEach((item, index) => {
  if (item === 'A') stack[0].push(index);
  else stack[1].push(index);
})

console.log(stack);