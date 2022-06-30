// 回调
const execute = (color, time, callback) => {
  setTimeout(() => {
    console.log(color);
    callback();
  }, time);
}
