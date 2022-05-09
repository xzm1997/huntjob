const dateFormat = function(date, format) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  format.replace(/yyyy/, year);
  format.replace(/MM/, month);
}

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')