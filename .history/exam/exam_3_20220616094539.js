let a = "9007199254740991";
let b = "1234567899999999999";

function add (a, b) {
  let aList = a.split("");
  let bList = b.split("");

  if (aList.length < bList.length) {
    [aList, bList] = [bList, aList];
  }
  for (let i = 0; i <= (aList.length- bList.length); ++i) {
    bList.unshift('0');
  }
  // console.log(aList, bList);
  let push = 0;
  for (let i = aList.length-1; i >= 0; --i) {
    aList[i] = parseInt(aList[i]);
    bList[i] = parseInt(bList[i]);
    console.log(aList[i], bList[i]);
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


console.log(add(a, b));
