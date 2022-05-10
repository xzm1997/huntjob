function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const task = (timer, light, callback) => {
  setTimeout(() => {
    light();
    callback();
  }, timer)
}

// task(3000, red, () => {
//   task(2000, green, () => {
//       task(1000, yellow, Function.prototype)
//   })
// })

const step = () => {
  task(3000, red, () => {
    task(2000, green, () => {
      task(1000, yellow, Step);
    })
  })
}