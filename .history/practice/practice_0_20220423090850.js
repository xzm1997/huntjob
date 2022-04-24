arr = [1,2,3,4];

Array.prototype.copy = function() {
    return [...this, ...this]
}

console.log(arr.copy());