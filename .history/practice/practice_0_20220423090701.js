arr = [1,2,3,4];

Array.prototype.copy = () {
    [...this, ...this];
}

arr.copy(arr);