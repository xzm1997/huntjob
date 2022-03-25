function bubbleSort(arr) {
  // 冒泡排序
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function selectSort(arr) {
  // 选择排序
  let minIndex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1;j < arr.length;j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

function insertSort(arr) {
  // 插入排序
  let preIndex, current;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
}

function shellSort(arr) {
  // 希尔排序
  let len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;
      while (j > gap - 1 && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }
}

function quickSort(arr) {
  // 快速排序
  if (arr.length === 0) {
    return [];
  }
  let baseIndex = Math.floor(arr.length / 2);
  let base = arr.splice(baseIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(base, quickSort(right));
}


var arr = [5, 1, 3, 17, 10, 12];
var res = quickSort(arr);
console.log(res);