function _new(obj) {
  let res = new Object();
  res.prototype = obj.prototype
  this = res
  return res
}