Function.prototype.call = function (context) {
  if (typeof this !== "function") throw 'TypeError';
  let args = [...arguments].slice(1), fn = this;
  return function (...newArgs) {

  }
}
