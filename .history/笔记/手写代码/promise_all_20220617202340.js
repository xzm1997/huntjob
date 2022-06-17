function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError('')
    }
  })
}
