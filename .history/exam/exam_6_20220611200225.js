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
