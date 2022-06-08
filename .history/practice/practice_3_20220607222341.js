let test = (a, b, ...rest) => {
  console.log('a: ', a);
  console.log('b: ', b);
  console.log('rest: ', rest);
}

test(1,2,3,4,5);
