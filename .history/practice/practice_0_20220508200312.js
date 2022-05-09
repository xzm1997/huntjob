const myInstanceOf = function (target, origin) {
  targetProto = target.__proto__
  originProto = origin.prototype;
  while (target != null) {
    if (targetProto == originProto) return true;
    targetProto = targetProto.__proto__
  }
}

console.log(myInstanceOf([1,2,3], Array))