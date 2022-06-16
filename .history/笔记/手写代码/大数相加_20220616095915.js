let a = "9007199254740991";
let b = "1234567899999999999";

function addByArray (a, b) {
  let aList = a.split("");
  let bList = b.split("");

  if (aList.length < bList.length) {
    [aList, bList] = [bList, aList];
  }
  while (aList.length > bList.length) {
    bList.unshift('0');
  }
  let push = 0;
  for (let i = aList.length-1; i >= 0; --i) {
    aList[i] = parseInt(aList[i]);
    bList[i] = parseInt(bList[i]);
    aList[i] = aList[i] + bList[i] + push;
    if (aList[i] > 9) {
      aList[i] %= 10;
      push = 1
    } else {
      push = 0;
    }
  }
  if (push) aList.unshift('1');
  return aList.join('');
}

let addByString = (a, b) => {
  if (a.length < b.length) {
    [a, b] = [b, a];
  }
  b = '0'.repeat(a.length - b.length) + b;
}

console.log(addByArra(a, b));
