// binary
a = 0b100000000000000000000000000000000000000000000000000011n
// → 9007199254740995n

a = BigInt(a);

let b = parseInt(a,2);
console.log(typeof(b));