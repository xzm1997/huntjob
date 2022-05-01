const myInstanceof = (target, origin) => {
  while (target) {
    if (target.__proto__ === origin.prototype) {
      return true
    }
    target = target.__proto__
  }
  return false
}
// 来源：阿冲


let a = [1,2,3,4]

console.log(a myInstanceof Array);