Promise.all = function (promises) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(promises)) {
      throw 'type error';
    }
    let resolvedNum = 0;
    let length = promises.length;
    let resolvedResult = [];
    for (let i = 0; i < length; ++i) {
      Promise.resolve(promises[i]).then(value => {
        ++resolvedNum;
        resolvedResult.push(value);
        if (resolvedNum === length) return resolve()
      })
    }
  })
}
