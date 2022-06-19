function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this, args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
}
