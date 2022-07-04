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
