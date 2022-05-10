Array.prototype.myFliter = function(fn) {
  if (typeof fn !== "function") throw Error("!");
  const res = [];
  arr.forEach(function(item) {
    fn(item)
    res.push(res);
  })
}

arr = [1,2,3,4,5,6,7,8]