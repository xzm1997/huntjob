// Promise
const light = (color, time) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(color);
    resolve();
  }, time)
})

const step = async () => {
  await light('red', 1000)
  await light('yellow', 2000)
  await light('blue', 3000)
  step();
}
step()
