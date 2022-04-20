// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

arr = [1,2,3,4,5];

Array.prototype.copy = (arr) => {
  console.log(this.valueOf());
}

console.log(arr.copy());