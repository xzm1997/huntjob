function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let res = null;
  
  if (typeof constructor !== "function") {
    console.log("type error");
    return;
  }

  newObj = Object.create(constructor.prototype)
  res = constructor.apply(newObj, arguments)

  let flag = res && (typeof res === "object" || typeof res === "function");
  return flag ? res : newObj
}


objectFactory(构造函数, 初始化参数);