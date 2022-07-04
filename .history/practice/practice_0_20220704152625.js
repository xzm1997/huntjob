Promise.race = function(iterators) {
  return new Promise((resolve, reject) => {
    for (const p of iterators) {
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
