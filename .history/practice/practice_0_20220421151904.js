// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let flatten = (arr) => {
  let res = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      res.push()
    } else {
      res.push(item);
    }
  })

  return res;
}

const a = [1, [2, [3, 4]]];
console.log(flatten(a));