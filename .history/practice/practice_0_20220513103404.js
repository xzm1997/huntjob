function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function light(timer, light, callback) {
  setTimeout(() => {
    light();
    callback();
  }, timer)
}

const step = () => {
  light(3000, red(), () => {
    light(2000, green(), () => {
      light(1000, yellow(), step)
    })
  })
}

step();