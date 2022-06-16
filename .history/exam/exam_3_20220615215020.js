let a = "9007199254740991";
let b = "1234567899999999999";

function add (a, b) {
  let aList = a.split("");
  let bList = b.split("");

  if (aList.length > bList.length) {
    bList.unshift('0');
  }
}
