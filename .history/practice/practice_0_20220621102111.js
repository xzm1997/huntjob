Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw 'Type error';
  }

  let args = [...arguments].slice[1], res;
  context = context || window;
  context.fn = this;
  res = context.fn(args);
  delete context.fn;
  return res;
}
