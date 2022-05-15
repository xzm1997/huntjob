function _instanceof(left, right) {
  let rightProto = right.prototype, leftProto = left.__proto__
  while (leftProto !== null) {
    if (rightProto === leftProto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}