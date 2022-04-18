// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let quickSort = (arr) => {
  let sort = (left, right) => {
    if (right - left < 2) return;
    let point = left + 1, sig = point;
    while (point < right) {
      if (arr[point] > arr[sig] && arr[point] <= arr[left]) {
        reverse(arr[point], arr[sig]);
        sig = point;
        point = sig + 1;
      }
    }
  }
  let reverse = (a, b) => {
    let tmp = a;
    a = b;
    b = tmp;
  }
}

arr = [1,7,4,2,6,8,12,43,2,3,5,12];
let res;
// res = quickSort(arr);
console.log(res);