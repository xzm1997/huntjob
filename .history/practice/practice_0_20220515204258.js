var a=3;
function c(){
  alert(a);
}
(function(){
  var a=4;
  c();
})();