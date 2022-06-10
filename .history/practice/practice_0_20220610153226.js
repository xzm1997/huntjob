function debounce(fn, wait) {
  setTimeout(fn(), wait)
}

debounce(() => console.log('debounce'), 1000)
