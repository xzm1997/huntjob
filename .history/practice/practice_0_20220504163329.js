
new Promise(function(resolve) {
    console.log('7');
    resolve(9);
}).then(function(res) {
    console.log(res)
})