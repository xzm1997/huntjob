Array.prototype.myFliter = function(fn) {
  if (typeof fn !== "function") throw Error("!");
  const res = [];
  arr.forEach(function(item) {
    resNow = fn(item)
    res.push(resNow);
  })
}

arr = [1,2,3,4,5,6,7,8]