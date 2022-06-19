promise.prototype.all = function(arr) {
  if (Array.isArray(arr)) {
    throw 'Array';
  }

  let resolvedCounter = 0;
  let promiseNum = arr.length;
  let resolvedResult = [];
  for (let i = 0; i < promiseNum; ++i) {
    Promise.resolve(arr[i]).then(value => {
      resolvedCounter++;
      resolvedResult.push(value);
      if (resolvedCounter === promiseNum) return resolve(resolvedResult);
    }, e => {
      return reject(error);
    })
  }
}
