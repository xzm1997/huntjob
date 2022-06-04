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

function mergeSort(arr) { 
  // 归并排序
  function merge(left, right){
    // 归并排序子函数
    var result = [];
    // console.time('归并排序耗时');
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    while (left.length) result.push(left.shift());
  
    while (right.length) result.push(right.shift());
    // console.timeEnd('归并排序耗时');
    return result;
  }
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
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

// 原地快排 参考：剑指offer40
function quickSortAd (arr, l, r) {
  if (l >= r) return arr;
  let i, j;
  [i, j] = [l, r];
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) --j;
    while (i < j && arr[i] <= arr[l]) ++i;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[l], arr[i]] = [arr[i], arr[l]];
  quickSortAd(arr, l, i-1);
  quickSortAd(arr, i+1, r);
}



function heapSort(array) {
  // console.time('堆排序耗时');
  function heapify(arr, x, len) {
    /*方法说明：维护堆的性质
    @param  arr 数组
    @param  x   数组下标
    @param  len 堆大小*/
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
  }
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
      //建堆
      var heapSize = array.length, temp;
      for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
          heapify(array, i, heapSize);
      }

      //堆排序
      for (var j = heapSize - 1; j >= 1; j--) {
          temp = array[0];
          array[0] = array[j];
          array[j] = temp;
          heapify(array, 0, --heapSize);
      }
      // console.timeEnd('堆排序耗时');
      return array;
  } else {
      return 'array is not an Array!';
  }
}

function countingSort(array) {
  var len = array.length,
      B = [],
      C = [],
      min = max = array[0];
  // console.time('计数排序耗时');
  for (var i = 0; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
      C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
      C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1; k >= 0; k--) {
      B[C[array[k]] - 1] = array[k];
      C[array[k]]--;
  }
  // console.timeEnd('计数排序耗时');
  return B;
}


function bucketSort(array, num) {
  /*方法说明：桶排序
  @param  array 数组
  @param  num   桶的数量*/
  if (array.length <= 1) {
      return array;
  }
  var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
  num = num || ((num > 1 && regex.test(num)) ? num : 10);
  console.time('桶排序耗时');
  for (var i = 1; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
  }
  space = (max - min + 1) / num;
  for (var j = 0; j < len; j++) {
      var index = Math.floor((array[j] - min) / space);
      if (buckets[index]) {   //  非空桶，插入排序
          var k = buckets[index].length - 1;
          while (k >= 0 && buckets[index][k] > array[j]) {
              buckets[index][k + 1] = buckets[index][k];
              k--;
          }
          buckets[index][k + 1] = array[j];
      } else {    //空桶，初始化
          buckets[index] = [];
          buckets[index].push(array[j]);
      }
  }
  while (n < num) {
      result = result.concat(buckets[n]);
      n++;
  }
  console.timeEnd('桶排序耗时');
  return result;
}

function radixSort(arr, maxDigit) {
  /*
  * 基数排序适用于：
  *  (1)数据范围较小，建议在小于1000
  *  (2)每个数值都要大于等于0
  * @param  arr 待排序数组
  * @param  maxDigit 最大位数
  */
  var mod = 10;
  var dev = 1;
  var counter = [];
  console.time('基数排序耗时');
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for(var j = 0; j < arr.length; j++) {
          var bucket = parseInt((arr[j] % mod) / dev);
          if(counter[bucket]== null) {
              counter[bucket] = [];
          }
          counter[bucket].push(arr[j]);
      }
      var pos = 0;
      for(var j = 0; j < counter.length; j++) {
          var value = null;
          if(counter[j]!=null) {
              while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
              }
        }
      }
  }
  console.timeEnd('基数排序耗时');
  return arr;
}

var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
// var res = heapSort(arr);
// var res = radixSort(arr,7)
let res = quickSortAd(arr, 0, arr.length-1)
console.log(arr);
