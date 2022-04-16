// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function mergeSort(arr) {
  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
  }
  var len = arr.length;
  if (len < 2) return arr;
  var middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle.);
  
}

arr = [1,7,23,19,65,13,12,54,87,2];
// insertSort(arr);
console.log(arr);