Array.prototype.myPush = function () {
  let len = this.length;
  for (let i = 0; i < arguments.length; ++i) {
    this[len] = arguments[i];
    ++len;
  }
}

arr = [1,2,3,4,5,6,7,8]