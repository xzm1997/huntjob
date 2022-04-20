// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

arr = [1,2,3,4,5];

Array.prototype.copy = function() {
  return [this];
}

console.log(arr.copy());