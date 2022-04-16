// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function selectSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        minIndex = i;
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
    }
}

arr = [1,7,23,1,65,23,12,54,87,2];
selectSort(arr);
console.log(arr);