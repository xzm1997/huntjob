function add(...args) {
  return args.reduce((a, b) => a+b);
}

function curry (fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

let 
