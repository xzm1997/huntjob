let startTime = new Date().getTime();  
let count = 0;  
//耗时任务  
setInterval(function() {  
  let i = 0;  
  while (i++ < 1000000000);  
}, 0);  
setInterval(function() {  
  count++;  
  console.log(  
    "与原设定的间隔时差了：",  
    new Date().getTime() - (startTime + count * 1000),  
    "毫秒"  
  );  
}, 1000);
