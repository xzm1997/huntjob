function ajax() {
  let request = new XMLHttpRequest()
  request.open('get', 'https://www.google.com')
  request.onreadystatechange = () => {
      if (request.readyState === 4) {
          if (request.status >= 200 && request.status <300) {
              let string = request.responseText
              let object = JSON.parse(string)
          }
      }
  }
  request.send()
}
