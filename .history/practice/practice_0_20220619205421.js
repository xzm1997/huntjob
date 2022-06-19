function debounce(fn, delay) {
  let timer = null;
  return function {
    let context = this;
    let args = arguments;
    if (timer) {
      timer = null;
    }

    setTimeout(() => {
      
    }, delay);
  }
}

function throttle(fn, delay) {
  
}
