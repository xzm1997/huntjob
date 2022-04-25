let quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let baseIndex = Math.floor(arr.length/2);
    let base = arr.splice(baseIndex, 1)[0];
    let left = [], right = [];
    arr.forEach ((item) => {
        if(item<base) left.push(item);
        else right.push(item);
    })
    return quickSort(left).concat(base, quickSort(right));
}

arr = [5,23,41,31,43,12,98,32,43,23,23,12,21,75];

arr = quickSort(arr);

console.log(arr);