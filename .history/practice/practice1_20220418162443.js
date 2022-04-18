// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  },100)
});
//产生一个成功值为2的promise对象
let p2 = Promise.resolve(2);
//产生一个失败值为3的promise对象
let p3 = Promise.reject('3失败了');

p1.then(value => {
  console.log(value);
});

p2.then(value => {
  console.log(value);
});

p3.then(undefined,reason => {
  console.log(reason);
})
p3.catch(reason => {
  console.log(reason);
})