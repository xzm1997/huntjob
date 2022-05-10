Array.prototype.myFliter = function(fn) {
  if (typeof fn !== "function") throw Error("!");
  const res = [];
  this.forEach(function(item) {
    resNow = fn(item)
    res.push(resNow);
  })
}

arr = [1,2,3,4,5,6,7,8]

console.log(arr.myFliter(i => i+1))