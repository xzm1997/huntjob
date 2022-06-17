function quickSort(l, r) {
  if (l >= r) return;
  let i, j;
  [i, j] = [l, r];
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) --j;
    while (i < j && arr[i] <= arr[l]) ++i;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  []
}
