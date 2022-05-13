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

light()