const debounce = function (fn, delay) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    let self = this;
    let args = arguments;
    timer = setTimeout(() => {
      fn().call(self, ...args);
    }, delay)
  } 
}

const throttle = (fn, delay) => {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn().call(context, ...args);
        timer = null;
      }, delay)
    }
  }
}
