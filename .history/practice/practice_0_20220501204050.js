const myInstanceof = (target, origin) => {
  while (target) {
    if (target.__proto__ === origin.prototype) return true;
    target = target.__proto__;
  }
}

let a = [1,2,3,4]

console.log(myInstanceof(a, Array));