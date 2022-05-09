var arr = [1,2,3,4,5,6,7,8,9,10];

while (arr.length > 0) {
  let index = Math.floor(Math.random * arr.length);
  let output = index.splice(index, 1)[0];
  console.log(output)
}