function childNum(num, count){
  let allplayer = [];    
  for(let i = 0; i < num; i++){
      allplayer[i] = i + 1;
  }
  
  let exitCount = 0;    // 离开人数
  let counter = 0;      // 记录报数
  let curIndex = 0;     // 当前下标
  
  while(exitCount < num - 1){
      if(allplayer[curIndex] !== 0) counter++;    
      
      if(counter == count){
          allplayer[curIndex] = 0;                 
          counter = 0;
          exitCount++;  
      }
      curIndex++;
      if(curIndex == num){
          curIndex = 0               
      };           
  }    
  for(i = 0; i < num; i++){
      if(allplayer[i] !== 0){
          return allplayer[i]
      }      
  }
}
console.log(childNum(30, 3))