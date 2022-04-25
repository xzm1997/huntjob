let quickSort = (arr) => {
    if (arr.length < 2) return arr;
    let index = 1;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i]  < arr[0]) {
            let tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
        let tmp = arr[0];
            arr[0] = arr[index-1];
            arr[index-1] = tmp;
    }
    return quickSort(arr.slice(0, index)).concat(quickSort(arr.slice(index+1)));
}

arr = [5,23,41,31,43,12,98,32,43,23,23,12,21,75];

arr = quickSort(arr);

console.log(arr);