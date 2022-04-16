// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function quickSort(arr) {
  if (arr.length === 0) return [];
  let baseIndex = Math.floor(arr.length / 2);;
  let base = arr.slice(baseIndex, 1)[0];
  let left = [], right = [];
  arr.forEach((item) => {
    if (item < base) left.push(item);
    else right.push(item);
  })
  return quickSort(left).concat(base, quickSort(right));
}

arr = [1,7,23,19,65,13,12,54,87,2];
arr = quickSort(arr);
console.log(arr);

