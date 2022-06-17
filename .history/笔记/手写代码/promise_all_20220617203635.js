function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    // 判断输入是否为数组
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedResult = [];
    // 遍历
    for (let i = 0; i < promiseNum; ++i) {
      Promise.resolve(promises[i]).then(value => {
        resolvedCounter++;
        resolvedResult.push(value);
        if (resolvedCounter === promiseNum) return resolve(promiseResult);
      }, e => {
        return reject(error);
      })
    }
  })
}
