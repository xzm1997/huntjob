function debounce(fn,delay){
  let timer;
  return function(){
      let context=this;
      let args=arguments;
      clearTimeout(timer);
      timer=setTimeout(()=>{
          fn.apply(context,args);
      },delay)
  }
}
