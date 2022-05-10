function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const task = (time, light) => new Promise ((resolve, reject) => {
  setTimeout(() => {
    light;
    resolve();
  }, time)
})

(function step() {
  task(3000, red)
    .then(() => task(2000, green))
    .then(() => task(1000, yellow))
    .then(step)
})()

