// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let quickSort = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  let left = [], right = [];
  let point = Math.floor(arr.length / 2);
  let sig = arr.splice(point, 1)[0];
  arr.forEach((item) => {
    if (item < sig) left.push(item);
    else right.push(item);
  })
  return quickSort(left).concat(sig,quickSort(right));
}

let mergeSort = (arr) => {
  
}


arr = [1,7,4,2,6,8,12,43,2,3,5,12];
// let res = quickSort(arr);
console.log(res);