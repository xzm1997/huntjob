function childNum (num, count) {
  let allPlayer = [];
  for (let i = 0; i < num; ++i) {
    allPlayer.push(i+1);
  }
  // console.log(allPlayer)
  let exitCount = 0;    // 离开人数
  let counter = 0;      // 记录报数
  let curIndex = 0;     // 当前下标

  while (exitCount < num - 1) {
    if (allPlayer[curIndex] !== 0) ++counter;
    if (counter == count)
  }
}

childNum(30,3);
