//jispa CLICK KRU USPA KATI HUI LINE AA JAYE
//TEXTDECORATION:LINETHROUGH
//5 TA J
// AGAT LISTENER LOGOTJA PARENT T LISTENER LOGALI
// let ul=document.querySelector("ul")
// ul.addEventListener("click",function(event){
//   event.target.style.textDecoration="line-through"    
// })
//iska ulta kaisa kra
//css ma jao class bonao text devcoration line through
let ul=document.querySelector("ul")
ul.addEventListener("click",function(event){
  event.target.classList.toggle("lt")
})
//click t line through hbo aru abar click t line through nho hbo

