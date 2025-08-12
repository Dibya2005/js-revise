//approach
// let h1=document.querySelector("h1")
// window.addEventListener("keydown",function(del){
//   h1.textContent=del.key
// })
//keyboard ma jo type karega wo h1 ma aa jayega 
//but there is a problem with space if we enter space the h1 become blank
let h1=document.querySelector("h1")
window.addEventListener("keydown",function(del){
  if(del.key!=' '){
  h1.textContent=del.key
  }
  else{
    h1.textContent="SPC"
  }

})