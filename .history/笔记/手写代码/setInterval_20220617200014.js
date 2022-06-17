function mySetInterval (fn, time) {
  while (true) {
    setTimeout(fn, time);
  }
}

setInterval(function() {
  console.log(1)
}, 1000);
