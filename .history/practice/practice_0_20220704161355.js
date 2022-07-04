const debounce = function(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setTimeout(() => {
      fn().apply(context, args);
    }, delay)
  }
}
