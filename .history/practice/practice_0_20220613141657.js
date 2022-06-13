let input = 'abcd';
let dir = input.split('');
// console.log(dir);

const swap = (i, j) => {
  [dir[i], dir[j]] = [dir[j], dir[i]];
}
