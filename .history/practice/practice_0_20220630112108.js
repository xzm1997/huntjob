// Promise
const task = (color, time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, time)
  })

const step = () => {
  task(3000, 'red')
    .then(() => task(2000, 'green'))
    .then(() => task(1000, 'yellow'))
    .then(step)
}

step();

const task2 = (timer, light) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(light);
            resolve()
        }, timer)
    })
// const step = () => {
//     task(3000, 'red')
//         .then(() => task(2000, 'green'))
//         .then(() => task(2100, 'yellow'))
//         .then(step)
// }
// step()
