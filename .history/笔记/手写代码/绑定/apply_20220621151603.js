Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw 'TypeError';
  }
}
