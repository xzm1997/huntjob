function add(a,b,c) {
  return a+b+c;
}

function curry (fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
