Function.prototype.myCall = function(context) {
  if (typeof this !== "function") {
    throw "Type Error";
  }

  let args = [...arguments].slice(1), result = null;
  context = context || window;
  context.fn = this;
}
