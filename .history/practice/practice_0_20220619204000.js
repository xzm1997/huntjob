// function debounce(fn, wait) {
//   let timer = null;

//   return function () {
//     let context = this, args = arguments;
//     console.log(args)

//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }

//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, wait);
//   }
// }

function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this,
        args = arguments;
    console.log(args);

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

debounce(console.log(1), 1000);
