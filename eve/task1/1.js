let inp=document.querySelector("input")
let span=document.querySelector("span")
inp.addEventListener("input",function(){
  input=20-inp.value.length
  if(input<0){
    span.textContent=input
    span.style.color="red"
  }
  else{
    span.textContent=input
    span.style.color="black"
  }
})