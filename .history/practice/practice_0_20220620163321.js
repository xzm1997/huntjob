const debounce = function (fn, delay) {
  let timer;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  setTimeout(() => {
    fn();
  }, delay)
}
