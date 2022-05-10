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

const step = () => {

}