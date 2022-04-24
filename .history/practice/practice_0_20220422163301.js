let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');
let res, exchange, stackInput = [[], []], stackPoint = [[],[]];

input.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

point.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})

let instead, enchange;

instead = Math.abs(stackInput[0] - stackPoint[0]);
res = instead;

let moreI = stackInput[0].length >= stackInput[1].length ? stackInput[0] : stackInput[1];
let moreP = stackPoint[0].length >= stackPoint[1].length ? stackPoint[0] : stackPoint[1];
let more = moreI.length > moreP.length ? moreI : length;
let less = moreI.length <= moreP.length ? moreI : length;

// 去多余元素
while (instead) {

}
for (let i = 0; i < more.length; ++i) {
  if (more[i] === )
}

// 查找相同元素


console.log(stackInput, stackPoint);