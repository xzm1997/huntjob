const myInstanceOf = function (target, origin) {
  originProto = origin.prototype;
  while (target != null) {
    if (target.__prototype__ == originProto)
  }
}

console.log(myInstanceOf([1,2,3], Array))