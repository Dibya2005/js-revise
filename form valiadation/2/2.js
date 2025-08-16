//inline velidation in form are like adding attribute like required maxlen min len
//p;attern attribute we wset the input which input we want to have
//now we look inton regex
//let consider regex for email valia=dation

let nm=document.querySelector("#name")
let form=document.querySelector("form")
form.addEventListener("submit",function(d){
  d.preventDefault()
  const regex="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  let res=regex.test("dibyaroy1233@gmail.com")
  console.log(res) //true
})