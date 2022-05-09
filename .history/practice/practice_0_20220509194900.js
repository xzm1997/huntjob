const dateFormat = function(date, format) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  format=format.replace(/yyyy/, year);
  format=format.replace(/MM/, month);
  format=format.replace(/dd/, day);
  console.log(format);
  return format
}

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')