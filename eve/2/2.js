let ip=document.querySelector('input');

// ip.addEventListener("input",function(){
//   console.log("typed");
// })


//typed print hbo jimn bar input t kiba type kru backspace krila o typed print hoin thakibo
// ip.addEventListener("input",function(e){
//    console.log(e.data);
// })
//backspace t data null hbo
ip.addEventListener("input",function(e){
  if(e.data!=null){
   console.log(e.data);
  }
})