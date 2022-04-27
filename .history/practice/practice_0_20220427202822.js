Array.prototype.copy = function () {
  return [...this, ...this];
}

console.log([1,2,3].copy());