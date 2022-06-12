function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);  
}

function test(a, b, c) {
  console.log(a, b, c);
}

curry(curry(test, a), b, c);

