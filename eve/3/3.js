//changre event tab jalta ha jab apka input select ya text area ma change a jaya
let sel=document.querySelector("select")
let device=document.querySelector("#device")
sel.addEventListener("change",function(del){
  device.textContent=`${del.target.value} is selected`
})
