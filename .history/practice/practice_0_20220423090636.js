arr = [1,2,3,4];

Array.prototype.copy = () {
    arr.push(arr);
}

arr.copy(arr);