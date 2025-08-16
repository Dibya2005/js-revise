//reding value from inputs
let nm=document.querySelector("#name")
let form=document.querySelector("form")
form.addEventListener("submit",function(d){
  d.preventDefault()
  //atu solar agt a foerm submit hoi jbo
  //so we use preventdefault

  if(nm.value.length<=2){
    document.querySelector(".hide").style.display="initial"

  }
  else{
    document.querySelector(".hide").style.display="none"
  }
})