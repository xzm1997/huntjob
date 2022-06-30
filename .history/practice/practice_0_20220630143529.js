// Promise
const light = (color, time) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(color);
    resolve();
  }, time)
})

const step = () => {
  light('red', 1000)
    .then(() => light('green'), 2000)
    .then(() => light('yellow'), 3000)
    .then(step)
}
step();
