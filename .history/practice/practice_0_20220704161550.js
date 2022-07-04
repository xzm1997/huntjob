const debounce = function(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setTimeout(() => {
      fn().apply(context, args);
    }, delay)
  }
}

let throttle = function(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      setTimeout(() => {
        fn().apply(context, args);
        timer = null;
      },delay);
    }
  }
}
