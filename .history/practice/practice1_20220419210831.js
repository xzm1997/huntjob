// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

arr = [1,2,3,4,5];

Array.prototype.copy = () => {
  console.log(this[0]);
}

console.log(arr.copy());