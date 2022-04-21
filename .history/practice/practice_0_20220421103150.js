// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function debounce(fn) {
  let timer = null;
  return function() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(this.arguments);
    }, 1000);
  }
}


debounce(function() {console.log("clear")});