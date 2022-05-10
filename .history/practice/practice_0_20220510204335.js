function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

const step = () => {
  task(3000, 'red', () => {
      task(2000, 'green', () => {
          task(1000, 'yellow', step)
      })
  })
}
step()