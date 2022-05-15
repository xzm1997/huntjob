function _new() {
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)
  let res = null
  if (typeof constructor !== "function") {
    console.log("type error");
    return
  }
  newObject = Object.create(constructor.prototype)

}