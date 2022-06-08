let ping = function(time, fn) {
  setTimeout(() => {
    fn();
  }, time);
}

ping(1000, ping());
