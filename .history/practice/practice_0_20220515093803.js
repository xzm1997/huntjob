function _new() {
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)
  let result = null
  if (typeof constructor !== "function") {
    console.log("type error");
    return
  }
  newObject = Object.create(constructor.prototype)
  result = constructor.apply(newObject, arguments)
  let flag = result && (typeof result === "object" || typeof result === "function")
  return flag ? result : newObject
}