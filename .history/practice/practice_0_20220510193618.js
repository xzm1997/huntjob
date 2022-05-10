Array.prototype.myPush = function (value) {
  this[this.length] = value;
}

arr = [1,2,3,4]
arr.myPush(5);