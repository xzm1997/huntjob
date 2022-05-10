Array.prototype.myFliter = function(treat) {
  this.forEach((item) => treat);
}
arr = [1,2,3,4,5,6,7,8]
arr.myFliter(console.log)
