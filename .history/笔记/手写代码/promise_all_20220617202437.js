function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedResult = []
  })
}
