// Promise
const light = (color, time) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(color)
  }, time)
})
