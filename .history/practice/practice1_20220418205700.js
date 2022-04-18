// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let quickSort = (arr) => {
  if (left > right) return;
  
  // 默认值
  left = left || 0;
  right = right || arr.length-1;

  // 左右游标
  let leftPoint = left, rightPoint=right;

  // 基准数
  let temp = arr[left];

  // 判断左右游标是否重合
  while (leftPoint != rightPoint) {
    while (arr[rightPoint])
  }
}

arr = [1,7,4,2,6,8,12,43,2,3,5,12];
let res;
// res = quickSort(arr);
console.log(res);