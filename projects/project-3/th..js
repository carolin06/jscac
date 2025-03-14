const ck=document.getElementById('clock')//alternate for queryselector



setInterval(function(){
  let date=new Date();
  ck.innerHTML=date.toLocaleTimeString()

},1000//every second
)