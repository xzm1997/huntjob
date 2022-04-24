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


instead = Math.abs(stackInput[0].length - stackPoint[0].length);

let moreI = stackInput[0].length >= stackInput[1].length ? stackInput[0] : stackInput[1];
let moreP = stackPoint[0].length >= stackPoint[1].length ? stackPoint[0] : stackPoint[1];
let more = moreI.length > moreP.length ? moreI : moreP;
let less = moreI.length <= moreP.length ? moreI : moreP;

// 查找相同元素
less.forEach((item) => {
  // console.log(item);
  if (more.includes(item)) {
    ++res;
  }
})



// console.log(stackInput, stackPoint);
console.log(res);