//apply
let obj={
  name:"harsh",
}





function abcd(a,b,c){
  console.log(this,a,b,c)

}
abcd.apply(obj,[1,2,3])
// 2 argument dete ho ek obj and perameter array ma 