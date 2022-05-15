function _new() {
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)
  let res = null
  if (typeof constructor !== "function")
}