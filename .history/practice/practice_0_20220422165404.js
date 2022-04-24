let input = 'ATTTAA'.split('');
let point = 'TTAATT'.split('');

const findRes = (arr_1, arr_2) => {
  let res_1, res_2;
  arr_1.forEach((item) => {
    if (arr_2.includes(item)) ++res_1;
  })
  arr_2.forEach((item) => {
    if (arr_1.includes(item)) ++res_2;
  })
  return (res_1 > res_2 ? res_1 : res_2);
}

let stackInput = [[], []], stackPoint = [[],[]];

input.forEach((item, index) => {
  if (item === 'A') stackInput[0].push(index);
  else stackInput[1].push(index);
})

point.forEach((item, index) => {
  if (item === 'A') stackPoint[0].push(index);
  else stackPoint[1].push(index);
})

// let res_0 = stackInput[0].length - stackPoint[1].length;
// let res_1 = stackInput[1].length - stackPoint[0].length;

let res_0 = findRes(stackInput[0], stackPoint[1])
let res_1 = findRes(stackInput[1], stackPoint[0])

let res = res_0 > res_1 ? res_0 : res_1;

// console.log(stackInput, stackPoint);
console.log(res);