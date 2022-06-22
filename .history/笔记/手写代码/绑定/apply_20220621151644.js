Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw 'TypeError';
  }

  let args = arguments[1] || null;
  
}
