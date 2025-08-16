//bind ek nyi cpy bnata ha function ka
//apply
let obj={
  name:"harsh",
}





function abcd(a,b,c){
  console.log(this,a,b,c)

}
let fnc=abcd.bind(obj,1,2,3)
console.log(fnc)
fnc()
//fnc me funtion ha //agr 
//cvhala du naya function ma this object ho jayega 