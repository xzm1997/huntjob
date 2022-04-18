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
  const merge = (left, right) => {
    let res = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }
    if (left.length) res.push(...left);
    else res.push(...right);
    return res;
  }

  if (arr.length < 2) return arr;
  len = arr.length;
  let middle = Math.floor(len/2), left = arr.slice(0, middle), right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}


arr = [1,7,4,2,6,8,12,43,2,3,5,12];
let res;
// res = quickSort(arr);
res = mergeSort(arr);
console.log(res);