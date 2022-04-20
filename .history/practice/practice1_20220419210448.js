// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

arr = [1,2,3,4,5];

let copy = (arr) => {
  return arr.concat(arr);
}

console.log(copy(arr));