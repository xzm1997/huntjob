function mySetInterval (fn, time) {
  setTimeout(() => {
    fn();
    mySetInterval(fn, time);
  }, time)
}
