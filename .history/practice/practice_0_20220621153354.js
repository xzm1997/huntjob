Function.prototype.call = function (context) {
  if (typeof this !== "function") throw 'TypeError';
  let args = [...arguments].slice(1), fn = this;
  return function () {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}
