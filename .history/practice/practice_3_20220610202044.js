function add(a,b,c) {
  return a+b+c
}

function curry (fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

let addCurry = curry(add);
console.log(addCurry(1)(2)(3)(4,5));
