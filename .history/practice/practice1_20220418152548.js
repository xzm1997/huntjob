// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let p = new Promise((resolve, reject) => {
  console.log("Beginning!");
  let judge = Math.random()
  if (judge > 0.5) {
    resolve();
  } else {
    reject();
  }
})

p.then(() => {
  console.log("Resolved!");
}, () => {
  console.log("Rejected!");
})