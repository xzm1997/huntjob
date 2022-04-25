let quickSort = (arr) => {
    if (arr.length < 2) return arr;
    let index = 1;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i]  < arr[0]) {
            let tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }
    return arr;
}

arr = [5,23,41,31,43,12,98,32,43,23,23,12,21,75];

arr = quickSort(arr);