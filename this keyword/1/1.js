//this is a special keyword
//jaisq ki bakki sarre keyword ki value ya nature same rhta ha 
//this ke value ya nature badal jatti ha
//is bat se ap usa kha use kr rHA  ho
//globel
// console.log(this)
//globel scope me this ki value window hoti ha
//window is supreme
//function
function a(){
  console.log(this)
}
a()
//isma bhi window 
//method
let obj={
  name:"jkok",
  sayname:function(){
    console.log(this.name)

  },
}
//if
obj.sayname()
//ek aisa function jo object ke andar ho ussa hame method khta ha
//sayname method
//{ name: 'jkok', sayname: [Function: sayname] }
//method ke andar apka value object ho jta ha
//object ke key ko access kar sakte ha method ma
//method ke andar ka fyunction yadi arroe=w function hoga to this windoew ke barabar ho jayega
//method ke andar funtion tab bhi this will become window obj
//IN EVENT HANDLER
document.querySelector("h1").addEventListener("click",function() {
  console.log(this.style.color="rgba(40, 142, 245, 1)")
})
//event listener ke andar this hamesa wahi hoga jispa add eve listen lga ha
//class




