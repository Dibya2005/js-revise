//add hi5ghlight class to every even item in the list
let li=document.querySelectorAll("ul li:nth-child(2n)")
li.forEach((ele)=>{
  ele.classList.add("highlight")

})
