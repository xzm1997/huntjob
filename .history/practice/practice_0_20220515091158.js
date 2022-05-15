function _instanceof(left, right) {
  let rightProto = right.prototype, leftPrototype = left.__proto__
  while (rightProto !== leftPrototype) {
    leftPrototype = leftPrototype.__proto__
  }
}