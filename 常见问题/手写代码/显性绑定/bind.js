Function.prototype.myBind = function (context) {
  if (typeof this !== "function") throw "Error";

  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    // 判断函数作为构造函数的情况
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}
