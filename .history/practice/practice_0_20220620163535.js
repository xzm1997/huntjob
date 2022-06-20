const debounce = function (fn, delay) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    let self = this;
    let args = arguments;
    setTimeout(() => {
      fn().call(self, ...args);
    }, delay)
  }
  
}
