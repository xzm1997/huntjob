// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let p = new Promise((resolve, reject) => {
  console.log("Beginning!");
  let judge = Math.random()
  if (judge > 0.5) {
    resolve(judge);
  } else {
    reject(judge);
  }
})

p.then((judge) => {
  console.log("Judge is " + judge);
  console.log("Resolved!");

}, (judge) => {
  console.log("Judge is " + judge);
  console.log("Rejected!");
})