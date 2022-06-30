// 回调
const execute = (color, time, callback) => {
  setTimeout(() => {
    console.log(color);
    callback();
  }, time);
}

const run = () => {
  execute('red', 1000, () => {
    execute('green', 2000, () => {
      execute('yellow', 3000, run);
    })
  })
}
