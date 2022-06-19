function debounce(fn, delay) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

function throttle(fn, delay) {
  let timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay)
    }
  }
}
