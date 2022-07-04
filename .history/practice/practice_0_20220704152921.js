Promise.race = function(items) {
  return new Promise((resolve, reject) => {
    for (p of items) {
      resolve(p);
    }
  })
}
