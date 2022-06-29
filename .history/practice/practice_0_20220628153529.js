Promise((resolve, reject) => {
  console.log(1);
  throw '2';
}).catch((err) => {
  console.log(err)
}).then(() => {
  console.log(3);
})
