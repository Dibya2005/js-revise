let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
let btn=document.querySelector("button")
//child r pora parent r listener bilk sola
btn.addEventListener("click",function(){
 console.log("Button clicked")
})
c.addEventListener("click",function(){
  console.log("C clicked")

})
b.addEventListener("click",function(){
  console.log("B clicked")
  
})
a.addEventListener("click",function(){
  console.log("A clicked")
},true)

//jab bhi aap click krtew ho ya koi bhi event raise krte ho to apka event flow do phase ma hota ha
//phase 1:
//eveny+t top level element se niche ki taraf ayega
//phase2:
//event raised element sa parent ki traf jayega

//hamesha phase 1 hi phla hoti ha par wo by default off rhti ha agr usko on krde phase 1 ka answer milega(capture phase)
//kisibhi loistener ke last ka comma mrke true likh dijiye
