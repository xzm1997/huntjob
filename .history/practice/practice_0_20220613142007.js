let input = 'abcd';
let dir = input.split(''), res = [];
// console.log(dir);

const swap = (i, j) => {
  [dir[i], dir[j]] = [dir[j], dir[i]];
}

const find = (from, to) => {
  for (let i = from; i < to; ++i) {
    swap(i, from);
    res.push(dir.join(''));
  }
}
