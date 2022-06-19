function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this, args = arguments;
    console.log(args)

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

debounce(console.log(1), 1000);
