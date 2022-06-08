let ping = function(time, fn) {
  setTimeout(() => {
    console.log('ping');
    fn;
  }, time);
}

ping(1000, ping());
