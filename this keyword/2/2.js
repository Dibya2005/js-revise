class Kavin{
  constructor(){
    this.a=8
  }
}
let val=new Kavin()
console.log(val)
//classs ke andar this kin value blank object hoti han 
let obj={
  name:"jkok",
  sayname:function(){
    function k(){console.log(this.name)}
    k()

  }}
  obj.sayname()
