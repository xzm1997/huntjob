arr = [1,2,3,4];

Array.prototype.copy((arr) => {
    arr.push(arr);
})