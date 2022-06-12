const read_line = require('readline-sync')
let num = read_line.question("");
num = parseInt(num);
// console.log(num);

const judge = (arr) => {
  let max = arr[0], min = arr[0], maxIndex = 0, minIndex = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  if (maxIndex !== 0 && minIndex !== 0) {
    console.log('No');
    return;
  }
  if (minIndex > maxIndex) {
    for (let i = maxIndex; i < minIndex; ++i) {
      if (arr[i] < arr[i+1]) {
        console.log('No');
        return;
      }
    }
  } else {
    for (let i = minIndex; i< maxIndex; ++i) {
      if (arr[i] > arr[i+1]) {
        console.log('No');
        return;
      }
    }
  }

}

for (let i = 0; i < num; ++i) {
  let arrayNum = read_line.question("");
  let arr = read_line.question("").split(' ').map(item => parseInt(item))
  if (arrayNum <= 2) {
    console.log('Yes');
    continue
  }
  judge(arr);
}
