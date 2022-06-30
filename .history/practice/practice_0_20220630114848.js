// Promise
const task = (time, color) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(color);
    resolve();
  }, time);
})

const run = () => {
  task(1000, 'red')
    .then(() => task(2000, 'yellow'))
    .then(() => task(3000, 'green'))
    .then(run());
}

run();
