// let tm=setTimeout(function() {
//   console.log("Hello after 2 seconds");
// }, 2000);
// //set timeout runs only one time settime out runs repeatedly
// setInterval(function() {
//   console.log("Hello every 2 seconds");
// }, 2000);
// //clear time out use krne ka liya clearTimeout() function use hota hai
// //settimeout ek varisblre m save krna ha
// clearTimeout(tm);
// let count=10
// let m=setInterval(function() {
//   if(count===0){
//     clearInterval(m);
//   }
//   console.log(count);
//   count--;
// }, 1000);
let count=0;
let prog=document.querySelector(".progressbar")
let percenttext=document.querySelector("#percenttext")
setInterval(function(){
  if(count<=99){
    count++;
    prog.style.width=`${count}%`
   percenttext.textContent=`${count}%`
  }
  else{
    document.querySelector("#percenttext").textContent="Completed";
  }
},300)