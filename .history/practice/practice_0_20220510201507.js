Array.prototype.myFliter = function(fn) {
  if (typeof fn !== "function") throw Error("!");
}

arr = [1,2,3,4,5,6,7,8]