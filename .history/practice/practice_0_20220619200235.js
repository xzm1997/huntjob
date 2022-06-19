promise.prototype.all = function(arr) {
  if (Array.isArray(arr)) {
    throw 'Array';
  }

  let resolvedCounter = 0;
  let promiseNum = arr.length;
  for (let i = 0; i < promiseNum; ++i) {
    Promise.resolve(arr[i]).then(value => {
      resolvedCounter++;
      re
    })
  }
}
