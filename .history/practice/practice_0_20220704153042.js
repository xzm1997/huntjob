Promise.race = function(items) {
  return new Promise((resolve, reject) => {
    for (p of items) {
      Promise.resolve(p)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    }
  })
}

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
console.log(value);
// Both resolve, but promise2 is faster
});
